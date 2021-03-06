import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatashareService } from 'src/app/service/datashare/datashare.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  sentmsg: any;
  format: any;
  searchNote="";
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  constructor(public dialog: MatDialog, private data: DatashareService) { }

  ngOnInit(): void {
    this.data.store.subscribe(x => this.format=x)
    this.data.searchStore.subscribe(y => this.searchNote=y)
   }
   openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
     width: '350px',
     panelClass: 'my-custom-dialog-class',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed'); 
      this.noteUpdated.emit(result);
     });
  }
  operation(value: any) {
     this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
