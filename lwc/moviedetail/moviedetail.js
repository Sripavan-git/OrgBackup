import { LightningElement , wire} from 'lwc';

import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import movieChannel from '@salesforce/messageChannel/MyMsgChannel__c';

export default class Moviedetail extends LightningElement {

    subscription = null;
    loadComponent = false;
    movieDetail = {};

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                movieChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(messgae)
    {
        let movieId = messgae.movieId;
        console.log('movie id is '+movieId);
        this.fetchMovieDetails(movieId);
    }

    async fetchMovieDetails(movieId)
    {
        let URL = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=a5c3ce38`;
        const res = await fetch(URL);
        const data = await res.json();

        console.log('Movie details is '+JSON.stringify(data));
        this.loadComponent = true;
        this.movieDetail = data;


    }


}