import { LightningElement, wire } from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import movieChannel from '@salesforce/messageChannel/MyMsgChannel__c';

export default class MovieSearch extends LightningElement {

    selectedType = '';
    loading = false;
    searchField = '';
    selectedPage = "1";
    delayTimeout;
    searchedMovies = [];
    selectedMovie ="";
    get typeOptions()
    {
        return[

            {label : "None", value: ""},
            {label : "Movie", value: "movie"},
            {label : "Series", value: "series"},
            {label : "Episode", value: "episode"}
        ]
    }

    @wire(MessageContext)
    messageContext;

    handleChange(event)
    {
        let {name,value} = event.target;
        this.loading = true;
        if(name === "type")
        {
            this.selectedType = value;
        }
        if(name === 'search')
        {
            this.searchField = value;
            if(value.length === null || value.length === '')
            {
                this.searchedMovies = null;
            }
        }
        if(name === 'pageno')
        {
            this.selectedPage = value;
        }
        

        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.searchMovie();
        }, 300);
        
    }

    async searchMovie()
    {
        const URL = `https://www.omdbapi.com/?s=${this.searchField}&type=${this.selectedType}&page=${this.selectedPage}&apikey=a5c3ce38`;   
        const res = await fetch(URL);
        const data = await res.json();
        console.log('Movie search is '+JSON.stringify(data));
        if(data.Response === "True")
        {
            this.searchedMovies = data.Search;
        }
        this.loading = false;

    }

    get showMovies()
    {
        return this.searchedMovies.length > 0 ? true : false;
    }

    handleChildSelection(event)
    {
        this.selectedMovie = event.detail; 

        const payload = { movieId:  this.selectedMovie};

        publish(this.messageContext, movieChannel, payload);

    }

}