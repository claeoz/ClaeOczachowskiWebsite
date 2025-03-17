import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {
  quotes: string[] = [
    "dont believe everything on the internet - Abraham Lincoln",
    "Everyone sees what you appear to be few experience what you really are - Nicollo Machiavelli",
    "life is a sum of all of your choices so what are you doing today - Albert Camus",
    "the greatness of man lies in his decision to be stronger than his condition - Albert Camus",
    "As to whether Marcos is gay: Marcos is gay in San Francisco, black in South Africa, an Asian in Europe, a Chicano in San Ysidro, an anarchist in Spain, a Palestinian in Israel, a Mayan Indian in the streets of San Cristobal, a Jew in Germany, a Gypsy in Poland, a Mohawk in Quebec, a pacifist in Bosnia, a single woman on the Metro at 10pm, a peasant without land, a gang member in the slums, an unemployed worker, an unhappy student and, of course, a Zapatista in the mountains -Subcommandante Marcos",
    "the revolution is not an apple that falls when it is ripe you have to make it fall - George Washington",
    "you can jail a revolutionary but you cant jail the revolution - Huey P Newton",
    "my fear was not death itself but a death without meaning - Huey P Newton",
    "your mother - Sigmund Freud",
    "peace to you if youre willing to fight for it - Fred Hampton",
    "I'm no longer accepting the things I cannot change I'm changing the things I cannot accept - Angela Davis",
    "I pissed on a man who called me a dog why was he so surprised - Diogenes",
    "oh please the reason I am here today from the mouth of the state department itself is i should not be allowed to travel because I have struggled for the independence of the colonial peoples of africa - Paul Robeson",
    "self conciousness is not knowledge but a story one tells about oneself - Simone De Beauvoir",
    "apostles of freedom are ever idolized when dead but crucified when alive - James Conally",
    "why should I fear death if I am death is not if death is I am not why should I fear that which can only exist when I do not -Epicurus",
    "the greatest crimes issue from a desire for excess and not from necessity - Aristotle",
    "I prefer liberty with danger than peace with slavery - Jean Jacques Rousseau",
    "what matters is not to know the world but to change it - Frantz Fanon",
    "we know too well that our freedom is incomplete without the freedom of the Palestinians - Nelson Mandela"
  ]
  currentQuote: string = '';

  constructor() {}

  ngOnInit() {
      this.displayRandomQuote();
      setInterval(() => this.displayRandomQuote(), 5000)
  }
  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);

    this.currentQuote = this.quotes[randomIndex];
  }
}
