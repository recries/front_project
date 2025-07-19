import React, { useEffect, useState } from 'react';
import api from '../api/api'; // api.js 파일 임포트

const MainDashboard = () => {
    const [approvalDocuments, setApprovalDocuments] = useState([]);

    useEffect(() => {
        // Bar Chart Example
        const ctxBar = document.getElementById("myBarChart");
        if (ctxBar) {
            new window.Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [{
                        label: "Revenue",
                        backgroundColor: "rgba(2,117,216,1)",
                        borderColor: "rgba(2,117,216,1)",
                        data: [4215, 5312, 6251, 7841, 9821, 14984],
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            time: {
                                unit: 'month'
                            },
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: 6
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 15000,
                                maxTicksLimit: 5
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }

        // Area Chart Example
        const ctxArea = document.getElementById("myAreaChart");
        if (ctxArea) {
            new window.Chart(ctxArea, {
                type: 'line',
                data: {
                    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
                    datasets: [{
                        label: "Sessions",
                        lineTension: 0.3,
                        backgroundColor: "rgba(2,117,216,0.2)",
                        borderColor: "rgba(2,117,216,1)",
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(2,117,216,1)",
                        pointBorderColor: "rgba(255,255,255,0.8)",
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(2,117,216,1)",
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            time: {
                                unit: 'date'
                            },
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: 7
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 40000,
                                maxTicksLimit: 5
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, .125)",
                            }
                        }],
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }

        // Fetch approval documents
        const fetchApprovalDocuments = async () => {
            try {
                const response = await api.get('/approval-documents');
                setApprovalDocuments(response.data);
            } catch (error) {
                console.error('Error fetching approval documents:', error);
            }
        };

        fetchApprovalDocuments();
    }, []);

    return (
        <div className="container-fluid px-4">
            <div className="chartLayout" >
                <div className="custom-col-6">
                    <div className="custom-card custom-margin-bottom-4">
                        <div className="custom-card-header">
                            <i className="fas fa-chart-area custom-margin-end-1"></i>
                            소비 그래프
                        </div>
                        <div className="custom-card-body">
                            <canvas id="myAreaChart" width="100%" height="40"></canvas>
                        </div>
                    </div>
                </div>
                <div className="custom-col-6">
                    <div className="custom-card custom-margin-bottom-4">
                        <div className="custom-card-header">
                            <i className="fas fa-chart-bar custom-margin-end-1"></i>
                            잔액 그래프
                        </div>
                        <div className="custom-card-body">
                            <canvas id="myBarChart" width="100%" height="40"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-accordion" id="accordionExample">
                <div className="custom-accordion-item">
                    <h2 className="custom-accordion-header">
                        <button className="custom-accordion-button" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                            2025-05-02 거래내역
                        </button>
                    </h2>
                    <div id="collapseOne" className="custom-accordion-collapse collapse show"
                         data-bs-parent="#accordionExample">
                        <div className="custom-accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control the
                            overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="custom-accordion-item">
                    <h2 className="custom-accordion-header">
                        <button className="custom-accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="custom-accordion-collapse collapse"
                         data-bs-parent="#accordionExample">
                        <div className="custom-accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control the
                            overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="custom-accordion-item">
                    <h2 className="custom-accordion-header">
                        <button className="custom-accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="custom-accordion-collapse collapse"
                         data-bs-parent="#accordionExample">
                        <div className="custom-accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control the
                            overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-card custom-margin-bottom-4">
                <div className="custom-card-header">
                    <i className="fas fa-table custom-margin-end-1"></i>
                    내가 할 일 (결재 대기 문서)
                </div>
                <div className="custom-card-body">
                    <table className="custom-table custom-table-bordered">
                        <thead>
                        <tr>
                            <th>기안일</th>
                            <th>문서 종류</th>
                            <th>제목</th>
                            <th>기안자</th>
                        </tr>
                        </thead>
                        <tbody>
                        {approvalDocuments.map((doc) => (
                            <tr key={doc.doc_id}><td>{new Date(doc.created_at).toLocaleDateString()}</td><td>{doc.category_id}</td>{/* TODO: category_id를 category_name으로 변환 필요 */}<td><a href={`/approval-documents/${doc.doc_id}`}>{doc.title}</a></td><td>{doc.drafter_id}</td>{/* TODO: drafter_id를 drafter_name으로 변환 필요 */}</tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;