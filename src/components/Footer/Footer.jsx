import React from 'react';
// import './Footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto" datatest-id="footer">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h5 id="info-id">My Info:
                        <a href="https://github.com/MackFolds" target="_blank" rel='noreferrer noopener'><i className="bi bi-github"></i></a> 
                        <a href="https://www.linkedin.com/in/mack-folds-419a46204" target="_blank" rel='noreferrer noopener'><i className="bi bi-linkedin"></i></a> 
                        <a href="https://stackexchange.com/users/20507472/venomtide" target="_blank" rel='noreferrer noopener'><i class="bi bi-stack"></i></a>
                    </h5>
                </div>
            </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <h5 datatest-id="date">Copyright &copy; {new Date().getFullYear()}</h5>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;