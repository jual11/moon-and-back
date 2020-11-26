import React from 'react';
import '../css/Auction.css';
import osta from '../apis/osta';
import Search from './Search';
import Countdown from './Countdown';


class Auction extends React.Component {
    state = {
        image: '',
        price: null,
        bids: null,
        title: '',
        dateEnd: null
    }
  
    onTermSubmit = async (term) => {
        const response = await osta.get(`/${term}`);
        this.setState({ 
            image: response.data.imageUrl,
            price: response.data.currentPriceEur,
            bids: response.data.currentBids,
            title: response.data.title,
            dateEnd: response.data.dateEnd
        });
    };

    display = () => {
        if(this.state.bids === null ) {
            return <Search onFormSubmit={this.onTermSubmit}></Search>;

        } else {
            return (
                <div>
                    <Search onFormSubmit={this.onTermSubmit}></Search>
                    <div className='action-wrap'>
                        <div className='product-container'>
                            <img className='product-img' src={this.state.image} alt={this.state.title}/>   
                        </div>
                        <div>
                            <label className='product-label'>{this.state.title}</label>
                            <div className='data-container'>
                                <div>
                                    <p className='data'>{this.state.price}</p>
                                    <label className='label'>hetke hind</label>
                                </div>
                                <div>
                                    <Countdown date={this.state.dateEnd}/>
                                    <label className='label'>oksjoni lõpuni</label>
                                </div>
                                <div>
                                    <p className='data'>{this.state.bids}</p>
                                    <label className='label'>pakkumist</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
                
    render() {  
        return(
            <div className='auction-container'>
                {this.display()}
            </div>
        );
    }
}

export default Auction;