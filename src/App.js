import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';



/*import index from './Index/index';*/
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
import LeftSideBarComponent from './components/LeftSideBarComponent';
import MainDashboard from './page/MainDashboard'; // 메인화면 따로 분리
import UseList from './page/pament/UseList'; // 결재

/*import ExpenseTracker from './pages/ExpenseTracker';
import IncomeTracker from './pages/IncomeTracker';
import Settings from './pages/Settings';*/

const App = () => {
    return (
        <Router>
            <HeaderComponent/>

            <div className="app">
                <main>
                    <NavComponent/>
                    <div id="layoutSidenav">
                        <LeftSideBarComponent/>
                        <div id="layoutSidenav_content">
                            <main>
                                <Routes>
                                    <Route path="/" element={<MainDashboard/>}/>
                                    <Route path="/UseList" element={<UseList/>}/>
                                </Routes>
                            </main>
                            <footer className="custom-footer">
                                <div className="custom-container-fluid">
                                                                        <div className="custom-display-flex custom-align-items-center custom-justify-content-between custom-small">
                                        <div className="custom-text-muted">Copyright &copy; Your Website 2023</div>
                                        <div>
                                            <Link to="/privacy-policy">Privacy Policy</Link>
                                            &middot;
                                            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <Routes>
                        {/*<Route path="/expense-tracker" element={<ExpenseTracker />} />
                        <Route path="/income-tracker" element={<IncomeTracker />} />
                        <Route path="/settings" element={<Settings />} />*/}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
