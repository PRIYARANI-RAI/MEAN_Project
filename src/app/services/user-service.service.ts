import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  //-----User Login-------------------------
  ProceedLogin(inputdata: any) {
    return this.http.post('http://localhost:8201/user/login', inputdata)
  }
  IsLoggedIn() {
    return localStorage.getItem("Users") != null;
  }
  //-----User Register-------------------------
  Registration(inputdata: any) {
    return this.http.post('http://localhost:8201/user/register', inputdata)
  }
  //-----UserByID-------------------------
  singleUser(id: any) {
    return this.http.get(`http://localhost:8201/user/userdetail/${id}`)
  }
  //-----Profile Update-------------------------
  updateProfile(id: any, inputdata: any) {
    return this.http.put(`http://localhost:8201/user/updateuser/${id}`, inputdata)
  }
  //-----All States-------------------------
  state() {
    return [
      {
        id: 1,
        name: "AndhraPradesh"
      },
      {
        id:2,
        name: "ArunachalPradesh"
      },
      {
        id: 3,
        name: "Assam"
      }, {
        id: 4,
        name: "Bihar"
      },
      {
        id: 5,
        name: "Chhattisgarh"
      }, {
        id: 6,
        name: "Goa"
      },
      {
        id: 7,
        name: "Gujarat"
      }, {
        id: 8,
        name: "Haryana"
      },
      {
        id: 9,
        name: "Himachal Pradesh"
      },
      {
        id: 10,
        name: "Jharkhand"
      }, {
        id: 11,
        name: "Karnataka"
      },
      {
        id: 12,
        name: "Kerala"
      },

      {
        id: 13,
        name: "Madhya Pradesh"
      },
      {
        id: 14,
        name: "Maharashtra"
      },
      {
        id: 15,
        name: "Manipur"
      },
      {
        id: 16,
        name: "Meghalaya"
      },
      {
        id: 17,
        name: "Mizoram"
      },
      {
        id: 18,
        name: "Nagaland"
      },
      {
        id: 19,
        name: "Odisha"
      },
      {
        id: 20,
        name: "Punjab"
      },
      {
        id: 21,
        name: "Rajasthan"
      },
      {
        id: 22,
        name: "Sikkim"
      },
      {
        id: 23,
        name: "Tamil Nadu"
      },
      {
        id: 24,
        name: "Telangana"
      },
      {
        id: 25,
        name: "Tripura"
      },
      {
        id: 26,
        name: "Uttarakhand"
      },
      {
        id: 27,
        name: "Uttar Pradesh"
      },
      {
        id: 28,
        name: "West Bengal"
      }
    ]
  }
  //-----Cities-------------------------
  city() {
    return [
      {
        id: 1,
        name: "Amravati"
      },
      {
        id: 1,
        name: "Guntur"
      },
      {
        id: 1,
        name: "Nellore"
      },
      {
        id: 1,
        name: "Tirupati"
      },
      {
        id: 1,
        name: "Visakhapatnam"
      },
      {
        id: 1,
        name: "Vijayawada"
      },
      {
        id: 2,
        name: "Tawang"
      },
      {
        id: 2,
        name: "Bhismaknagar"
      }, {
        id: 2,
        name: "Pasighat"
      },
      {
        id: 2,
        name: "Ziro"
      }, {
        id: 2,
        name: "Bomdila"
      },
      {
        id: 3,
        name: "Guwahati"
      }, {
        id: 3,
        name: "Tezpur"
      },
      {
        id: 3,
        name: "Dibrugarh"
      }, {
        id: 3,
        name: "Silchar"
      },
      {
        id: 3,
        name: "North Lakhimpur"
      },
      {
        id: 4,
        name: "Gaya"
      },
      {
        id: 4,
        name: "Biharsharif"
      },
      {
        id: 4,
        name: "Darbhanga"
      },
       {
        id: 4,
        name: "Bhagalpur"
      },
      {
        id: 4,
        name: "Patna"
      },
      {
        id: 5,
        name: "Bilaspur"
      },
      {
        id: 5,
        name: "Korba"
      },  
      {
        id: 5,
        name: " Durg-Bhilainagar"
      }, 
       {
        id: 5,
        name: "Raigarh"
      },
     {
        id: 5,
        name: "Rajnandgaon"
      },
      {
        id: 6,
        name: "Vasco-da-Gama"
      },
      {
        id: 6,
        name: "Ponda"
      },
      {
        id: 6,
        name: "Margao"
      },
      {
        id: 6,
        name: "Mapusa"
      },
      {
        id: 6,
        name: "Goa Velha"
      },
      {
        id: 7,
        name: "Ahmedabad"
      },
      {
        id: 7,
        name: "Surat"
      },
      {
        id: 7,
        name: "Rajkot"
      },
      {
        id: 7,
        name: "Junagadh"
      },
      {
        id: 7,
        name: "Vadodara"
      },
      {
        id: 8,
        name: "Faridabad"
      },
      {
        id: 9,
        name: "Gurgaon"
      },
      {
        id: 10,
        name: "Dharamshala"
      },
      {
        id: 11,
        name: "Mandi"
      },
      {
        id: 12,
        name: "Bokaro Steel City "
      },
      {
        id: 12,
        name: "Jamshedpur"
      },
      {
        id: 13,
        name: "Jamshedpur"
      },
      {
        id: 13,
        name: "Mysore"
      },

      {
        id: 13,
        name: "Kochi"
      },
      {
        id: 13,
        name: "Indore"
      },
      {
        id: 14,
        name: "Pune"
      },

      {
        id: 14,
        name: "Nagpur"
      },
      {
        id: 14,
        name: "Nashik"
      },
      {
        id: 14,
        name: "Aurangabad"
      },
     {
        id: 14,
        name: "Solapur"
      },
      {
        id: 14,
        name: "Chandrapur"
      },
      {
        id: 14,
        name: "Anravati"
      },
      {
        id: 14,
        name: "Gadchiroli"
      }, 
      {
        id: 14,
        name: "Mumbai"
      },
      {
        id: 15,
        name: "Bishnupur"
      },
      {
        id: 16,
        name: "Tura"
      },
      {
        id: 17,
        name: "Tura"
      },
      {
        id: 18,
        name: "Tuipang"
      },
      {
        id: 19,
        name: "Mokokchung"
      },
      {
        id: 20,
        name: "Rourkela"
      },
      {
        id: 21,
        name: "Amritsar"
      },
      {
        id: 22,
        name: "Jodhpur"
      },
      {
        id: 23,
        name: "Namchi"
      },
      {
        id: 24,
        name: "Vellore"
      },
      {
        id: 25,
        name: "Warangal"
      },
      {
        id: 26,
        name: "Udaipur"
      },
      {
        id: 27,
        name: "Noida"
      },
      {
        id: 28,
        name: "Kolkata"
      },
      {
        id: 28,
        name: "Howrah"
      }
    ]
  }
}
