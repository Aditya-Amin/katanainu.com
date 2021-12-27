import React from 'react';

class CommingSoon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uniswap: '0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15',
            pancake:'0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205',
            copySuccessUniswap:'',
            copySuccessPancake:'',
        }

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }


    copyToClipboard(token, text){
        navigator.clipboard.writeText(token);
        if( text === 'uniswap' ){
            this.setState({ copySuccessUniswap: 'Copied!' });
        }else{
            this.setState({ copySuccessPancake: 'Copied!' });
        }
        
    }


    render() {
        return (
            <section className="coming-soon-area bg-white pb-5" id="tokenomics">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-5">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center">
                            {/* <span className="sub-title">Our SALE</span> */}
                            <h2 className="title text-dark">You can purchase now on  <span>Pancake Swap</span> and <span>Uniswap</span></h2>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p className='text-dark' style={{ fontSize: '18px', fontWeight: 800}}><a href='https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15' target='_blank' rel='noreferrer'>Uniswap</a> </p>
                            <p className='text-dark'><strong>{ this.state.uniswap }</strong><i title="Click to copy" style={{ cursor:'pointer', marginLeft:'20px', display: 'inline-block'}} className="far fa-copy" onClick={ () => this.copyToClipboard(this.state.uniswap, 'uniswap') }></i><span style={ {display:'inline-block',marginLeft:'20px'}}>{ this.state.copySuccessUniswap }</span></p>
                            <p className='text-dark' style={{ fontSize: '18px', fontWeight: 800}}><a href='https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205' target='_blank' rel='noreferrer'>Pancake Swap</a> </p>
                            <p className='text-dark'><strong>{ this.state.pancake }</strong><i title="Click to copy" style={{ cursor:'pointer', marginLeft:'20px', display: 'inline-block'}} className="far fa-copy" onClick={ () => this.copyToClipboard(this.state.pancake, 'pancake') }></i><span style={ {display:'inline-block',marginLeft:'20px'}}>{ this.state.copySuccessPancake }</span></p>

                            <div className="slider-btn-wrap mt-5 justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://www.dextools.io/app/bsc/pair-explorer/0x693ff254f2e07f4852193f8bf347b3776c630ce4
" className="btn btn-style-two">DexTools</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CommingSoon
