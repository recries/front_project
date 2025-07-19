import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const LeftSideBarComponent = () => {
    return (<div id="layoutSidenav_nav">
            <nav className="custom-sidenav accordion" id="sidenavAccordion">
                <div className="custom-sidenav-menu">
                    <div className="custom-nav-list">
                        <div className="custom-sidenav-heading">메인</div>
                        <Link className="nav-link" to="/">
                            <div className="custom-nav-link-icon"><i className="fas fa-tachometer-alt"></i>
                            </div>
                            대시보드
                        </Link>
                        <div className="custom-sidenav-heading">작성하기</div>
                        <button className="nav-link" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false"
                           aria-controls="collapseLayouts">
                            <div className="custom-nav-link-icon">
                                <i className="fas fa-columns"></i>
                            </div>
                            오늘의 소비
                            <div className="custom-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </button>
                        {/*<div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="custom-sidenav-nested-nav">
                                <Link className="nav-link" to="/layout-static">Static Navigation</Link>
                                <Link className="nav-link" to="/layout-sidenav-light">Light Sidenav</Link>
                            </nav>
                        </div>*/}
                        <button className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="custom-nav-link-icon"><i className="fas fa-book-open"></i></div>
                            소비내역
                            <div className="custom-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </button>
                        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav className="custom-sidenav-nested-nav accordion" id="sidenavAccordionPages">
                                <Link
                                    className="nav-link"
                                    to="/UseList"
                                >
                                  가계부 리스트
                                </Link>

                                <div className="collapse" id="pagesCollapseAuth"
                                     aria-labelledby="headingOne"
                                     data-bs-parent="#sidenavAccordionPages">
                                    <nav className="custom-sidenav-nested-nav">
                                        <Link className="nav-link" to="/login">Login</Link>
                                        <Link className="nav-link" to="/register">Register</Link>
                                        <Link className="nav-link" to="/password">Forgot Password</Link>
                                    </nav>
                                </div>
                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                                   data-bs-target="#pagesCollapseError" aria-expanded="false"
                                   aria-controls="pagesCollapseError">
                                    Error
                                    <div className="custom-sidenav-collapse-arrow"><i
                                        className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="pagesCollapseError"
                                     aria-labelledby="headingOne"
                                     data-bs-parent="#sidenavAccordionPages">
                                    <nav className="custom-sidenav-nested-nav">
                                        <Link className="nav-link" to="/401">401 Page</Link>
                                        <Link className="nav-link" to="/404">404 Page</Link>
                                        <Link className="nav-link" to="/500">500 Page</Link>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div className="custom-sidenav-heading">Addons</div>
                        <Link className="nav-link" to="/charts">
                            <div className="custom-nav-link-icon"><i className="fas fa-chart-area"></i>
                            </div>
                            Charts
                        </Link>
                        <Link className="nav-link" to="/tables">
                            <div className="custom-nav-link-icon"><i className="fas fa-table"></i></div>
                            Tables
                        </Link>
                    </div>
                </div>
                <div className="custom-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    );
}
export default LeftSideBarComponent;