import React from 'react';

class CommingSoon extends React.Component {
    render() {
        return (
            <section className="coming-soon-area">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center">
                        <span className="sub-title">Our SALE</span>
                        <h2 className="title">KATANA INU <span>SALE - Coming soon</span></h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="coming-time" data-countdown="2021/12/28" />
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CommingSoon
