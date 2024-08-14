import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidUrl = "https://covid-19-statistics.p.rapidapi.com/reports";

const headers = {
  "x-rapidapi-key": "36adc9c89cmsh9a29989a171b9afp13b519jsn97cd3c63fb9f",
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
};

const getData = createAsyncThunk("covid/getData", async ({ code,query }) => {
  //api ye gönderilecek parametreleri hazırla
  const params = { iso: code,q:query };

  // isoCode a göre covid verilerini al
  const req1 = await axios.get(covidUrl, { params, headers });

 
  //isoCode a göre ülke verilerini al
  const req2 = await axios.get(  code
    ? `https://restcountries.com/v3.1/alpha/${code}`
    : `https://restcountries.com/v3.1/name/${query}`);

  // her iki api isteğini aynı anda atıyoruz
  const responses = await Promise.all([req1,req2]);

  //region nesnesindeki değerleri bir üst nesne ile aynı düzeye çıkardık
  const covid = {...responses [0].data.data[0], ...responses[0].data.data[0].region,};

 //gereksiz değerleri kaldır 
 delete covid.cities;
 delete covid.region;

 //payloadı return et
 return { covid,country: responses [1].data[0]};


  
});

export default getData;
