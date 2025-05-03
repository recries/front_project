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
                            <footer className="py-4 bg-light mt-auto">
                                <div className="container-fluid px-4">
                                    <div className="d-flex align-items-center justify-content-between small">
                                        <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                        <div>
                                            <a href="#">Privacy Policy</a>
                                            &middot;
                                            <a href="#">Terms &amp; Conditions</a>
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
