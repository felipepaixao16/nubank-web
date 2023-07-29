import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: CardsService) {}

  accountData: AccountDataModel = {
    name: "",
    account: {
      agency: "0000",
      number: "00.000000-0"
    },
    card: {
      limit: 0,
      number: "0000"
    }
  };

  ngOnInit(): void {
      this.getAccountData();
  }

  getAccountData() {
		this.service.getCard().subscribe(data => {
			this.accountData.name = data.name;
			this.accountData.account.agency = data.account.agency;
			this.accountData.card.limit = data.card.limit;
			this.accountData.account.number = data.account.number;
			this.accountData.card.number = data.card.number.split(" ")[3];
		})
	}
}
