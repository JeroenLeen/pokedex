import { createClient } from '@supabase/supabase-js'
import { PokedexEntry } from './pokedexEntry'
export default class DBResource{

     supabaseUrl = 'https://wvbhoxbxpwxmvprlcxno.supabase.co'
     SERVICE_KEY = 'SUPABASE_SERVICE_KEY'
     supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2YmhveGJ4cHd4bXZwcmxjeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MTM1MDMsImV4cCI6MjAwNjI4OTUwM30.GFaiNe-24OBUZ-J-qNepju6I28QYBszwFHYkh4igt5k'
     supabase = createClient(this.supabaseUrl, this.supabaseKey);

    async sendRequest(username) {
        console.log('calling');
   

        let { data: AllPokemonDatabase, error } = await this.supabase
            .from('AllPokemonDatabase')
            .select("*")
            // Filters
            .eq('currentOwner', username);

      
        debugger;
        return  AllPokemonDatabase;
    }

    async getUniqueUsers() {
        console.log('calling');
   

        let { data: distinctusers, error } = await this.supabase
            .from('distinctusers')
            .select("*");

      
  
        return  distinctusers;
    }

    

    async getUniquePokedexEntries(username) {
        console.log('calling pokedex');


        let { data, error } = await this.supabase
            .from('ownedpokemondex')
            .select("*");

        let allData: PokedexEntry[] = data;
        allData.forEach(entry => {
            entry.normalNumber =0;
            entry.shinyNumber =0;
            let parts = entry.pokedex.match(/[a-zA-Z]+|[0-9]+/g)
            while (parts[0].length < 6) parts[0] = "0" + parts[0];
            entry.pokedex=parts[0] + (parts[1]==undefined?"":parts[1]);
        });

        //allData.sort((a, b) => (a.pokedex < b.pokedex ? -1 : 1));
        console.log("added zero's ?");
        console.log(allData);


        allData.sort(function (a, b) {
            if (a.pokedex < b.pokedex) {
              return -1;
            }
            if (a.pokedex > b.pokedex) {
              return 1;
            }
            return 0;
          });


          console.log(allData);

        allData.forEach(entry => {
            entry.pokedex =   entry.pokedex.replace(/^0+/, '');
        });


        let { data: AllPokemonDatabase, error:error2} = await this.supabase
        .from('AllPokemonDatabase')
        .select("*")
        // Filters
        .eq('currentOwner', username);
     

        AllPokemonDatabase.forEach(entry=> {
            let notFound = true;
            let startIndex = 0;
            while(notFound){
                if(allData[startIndex].pokedex == entry.pokedex){
                    if(entry.shiny){
                        allData[startIndex].shinyNumber = allData[startIndex].shinyNumber+1;
                    }else{
                        allData[startIndex].normalNumber = allData[startIndex].normalNumber+1;
                    }
                   
                    notFound=false;
                }
                startIndex++;
            }

        });


       return  allData;
    }
  
}