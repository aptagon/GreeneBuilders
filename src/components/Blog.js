import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/blog2.png';
import blog3 from '../assets/images/blog3.png';
export default function Blog () {
    return (
        <>
            <div className="container mt-4 blog" id="blog-section">
                <h1 className="text-center pt-3 pb-4">Check out our top blogs!</h1>
                <div className="row pt-4 pb-4">
                    <div className="col-md-5 blog-bg">
                        <h4 className="text-center">Expert Tips for Your Next Project</h4>
                        <p className="text-center text-bottom">See Our Latest Projects Come to Life</p>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="row blog-info">
                            <div className="col-md-3 image"><img src={blog1} alt="" style={{width: '100%'}}/></div>
                            <div className="col-md-9 info">
                                <h5>Your Guide to a Smooth Construction Process</h5>
                                <hr />
                                <p>July 23, 2024</p>
                            </div>
                        </div>
                        <div className="row blog-info">
                            <div className="col-md-3 image"><img src={blog2} alt="" style={{width: '100%'}}/></div>
                            <div className="col-md-9 info">
                                <h5>Industry Trends Shaping Construction</h5>
                                <hr />
                                <p>July 23, 2024</p>
                            </div>
                        </div>
                        <div className="row blog-info">
                            <div className="col-md-3 image"><img src={blog3} alt="" style={{width: '100%'}}/></div>
                            <div className="col-md-9 info">
                                <h5>How We Turn Vision into Reality</h5>
                                <hr />
                                <p>July 23, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}