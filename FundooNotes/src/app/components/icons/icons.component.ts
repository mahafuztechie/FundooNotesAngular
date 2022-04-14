import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private note: NoteService) { 
    
  }

  ngOnInit(): void {
    // this.noteId=[this.noteObject.notesId]
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
}
