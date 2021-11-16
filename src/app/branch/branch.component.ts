import { Component, OnInit } from '@angular/core';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  title = 'SearchAng';
  query:any;
  data:any;
  public searchFilter:any = '';

  constructor(private searchPipe: SearchFilterPipe) { 
    this.searchFilter = searchPipe.transform(this.data);
  }

  student = [
    {id:1, name: 'Abhinav Kumar', marks: '90'},
    {id:2, name: 'Digesh Sharma', marks: '92'},
    {id:3, name: 'Arjun Yadav', marks: '88'},
    {id:4, name: 'Khushi Kumar', marks: '90'},
    {id:5, name: 'Pramod Singh', marks: '95'},
    {id:6, name: 'Kanak Kumari', marks: '96'},
    {id:7, name: 'Jyoti Gupta', marks: '96'},
    {id:8, name: 'Aarti Sharma', marks: '90'},
    {id:9, name: 'Javed Agarwal', marks: '91'},
    {id:10, name: "Mehek Sharma", marks: '96'},
  ];
  
  places = [
    {
      city: "Delhi",
      town: "Vasant Vihar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Delhi",
      town: "Greater Kailash",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Delhi",
      town: "Okhla",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Delhi",
      town: "Dwarka",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Noida",
      town: "Sector 15",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Noida",
      town: "Sector 22",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Noida",
      town: "Sector 47",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Gandhinagar",
      town: "Airport Road",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Gandhinagar",
      town: "GIDC",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Guwahati",
      town: "A.T. Road",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Kolkata",
      town: "Salt Lake City",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Kolkata",
      town: "BBD Bagh",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Bhubaneshwar",
      town: "Ashok Nagar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Navi Mumbai",
      town: "Taloja",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Navi Mumbai",
      town: "Nerul",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Navi Mumbai",
      town: "Panvel",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Pune",
      town: "Viman Nagar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Pune",
      town: "Baner",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Hyderabad",
      town: "Abids",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Hyderabad",
      town: "Begumpet",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Bangalore",
      town: "Indira Nagar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Bangalore",
      town: "Rajaji Nagar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Bangalore",
      town: "Frazer Town",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Chennai",
      town: "Anna Nagar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
    {
      city: "Chennai",
      town: "Adyar",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },

    {
      city: "Trivandrum",
      town: "Poojappura",
      address: "random city, place",
      email: "abc@tyu.com",
      phone: "1234567890"
    },
  ];

  ngOnInit(): void {
  }

}
