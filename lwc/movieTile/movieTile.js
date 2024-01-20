import { LightningElement, api } from 'lwc';

export default class MovieTile extends LightningElement {

    @api movie;
    @api selectedmovieid;

    Clickhandler(event)
    {
        console.log('movie imdb is '+this.movie.imdbID);
        const evt = new CustomEvent('selectedmovie',{
            detail : this.movie.imdbID 
        });

        this.dispatchEvent(evt);

    }

    get tileSelected()
    {
        return this.selectedmovieid === this.movie.imdbID ? "mainTile selected" : "mainTile";
    }
}