import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnInit {
  @Input() date: string;

  public timerdate;
  public now;

  constructor() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  }

  ngOnInit(): void {
    this.timerdate = Math.trunc(new Date(this.date).getTime() / 1000);
    this.now = Math.trunc(new Date().getTime() / 1000);
  }

  get seconds() {
    let seconds = (this.timerdate - this.now) % 60;
    return seconds.toString().padStart(2, "0");
  }

  get minutes() {
    let minutes = Math.trunc((this.timerdate - this.now) / 60) % 60;
    return minutes.toString().padStart(2, "0");
  }

  get hours() {
    let hours = Math.trunc((this.timerdate - this.now) / 60 / 60) % 24;
    return hours.toString().padStart(2, "0");
  }

  get days() {
    return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24);
  }
}
