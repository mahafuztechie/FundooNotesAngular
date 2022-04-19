import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/service/noteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  notes: any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();

  isDeleted: boolean = false
  isArchived: boolean = false
  
  colorarray = ['#d7aefb', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#e8eaed', '#e6c9a8', '#e8eaed', '#006973'];
  constructor(private note: NoteService, private activatedroute: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    // this.noteId=[this.noteObject.notesId]
  
    let del = this.activatedroute.snapshot.component;

    if (del == TrashComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    let arc = this.activatedroute.snapshot.component;

    if (arc == ArchiveComponent) {
      this.isArchived = true;
      console.log(this.isArchived);
    }
  }

  onDelete() {
    console.log('deleted');
    this.noteId=[this.noteObject.notesId]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
  }

  onArchive(){
    this.noteId=[this.noteObject.notesId]
    console.log('Archived');

    this.note.archiveNotes(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
    })
  }

  onDeleteForever(){
    this.noteId=[this.noteObject.notesId]
    this.note.deleteNote(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
    } )
  }

  setColor(Color:any){
    this.noteId=[this.noteObject.notesId]
    let data = {
      color : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)
    })
  }
}