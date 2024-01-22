import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.scss'
})
export class LastFewTransactionsComponent {
  film = [
    {
      id: 1,
      title: "MEAN GIRLS",
      rate: "8.9",
      top: "#1",
      actors: "Angourie Rice, Reneé Rapp,...",
      status: "edit",
      imgSrc: "https://resizing.flixster.com/o-j0Uo0WRZ23hHHjtEEFqXrTb90=/fit-in/180x240/v2/https://resizing.flixster.com/0YWXiIrzIIikzllZUpKsCoHJVFY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxMzU5NGYyLTA5N2MtNDI0MS04YTI5LWNkMTg3NTZlMTU3MC5qcGc="
    },
    {
      id: 2,
      title: "THE BEEKEEPER",
      rate: "8",
      top: "#2",
      actors: "Jason Statham, Jeremy Irons...",
      status: "edit",
      imgSrc: "https://resizing.flixster.com/I_V1_1POyQ0SO-KcsqTmYwNodaw=/fit-in/180x240/v2/https://resizing.flixster.com/G2ypcmeD3YeumP2nvKiEmO5XQok=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MmJmNTk0LTFjNGEtNDVhNC1iNjI3LTFmNTVhYjg1ODc5Yy5qcGc="
    },
    {
      id: 3,
      title: "SALTBURN",
      rate: "8.3",
      top: "#3",
      actors: "Angourie Rice, Reneé Rapp,...",
      status: "edit",
      imgSrc: "https://resizing.flixster.com/i8ySUTSYzlJ_SYXFUJDhJmjOpas=/fit-in/180x240/v2/https://resizing.flixster.com/5IYYj4UmhM5oQyJ0g5O1wZLovdc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkZTU4Y2Y1LTY4NjMtNGU3YS05NTQ4LTE3MjNhZDc5ZjFlZi5qcGc="
    }
  ];
}
