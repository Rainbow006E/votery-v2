import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.news = [
      {
        image: "assets/imgs/news/news1.svg",
        title: "How Bitcoin's vast energy use could burst its bubble",
        description: `
          President Biden's top economic adviser described Bitcoin as "an extremely inefficient way to
          conduct transactions," saying "the amount of energy consumed in processing those
          transactions is staggering".`
      },
      {
        image: "assets/imgs/news/news2.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news3.svg",
        title: "2020 pandemics or how the world changed",
        description: `
        Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
        The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
        In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news4.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news5.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news6.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news7.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news8.svg",
        title: "2020 pandemics or how the world changed",
        description: `
          Right now, no matter where you live in the world, the coronavirus (COVID-19) pandemic is likely forcing changes to your everyday life.
          The same is true for businesses of all stripes, who have had to adjust on the fly as restrictions are put into place to slow the spread of the outbreak.
          In the process, much of the global economy has ground to a halt.`
      },
      {
        image: "assets/imgs/news/news9.svg",
        title: "5 Brain-Based Learning Strategies to Boost Learning, Retention, and Focus",
        description: `
        As defined by the Glossary of Education Reform, ”brain-based learning refers to teaching methods, lesson designs,
        and school programs that are based on the latest scientific research about how the brain learns,
        including such factors as cognitive development—how students learn differently as they age, grow,and mature socially, emotionally, and cognitively.”`
      }
    ];
  }

  detail() {
    this.router.navigateByUrl("/news-article");
  }
}
