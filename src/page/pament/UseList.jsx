import React, {useEffect, useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/all.css';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa'; // 아이콘 라이브러리

const initialData = [
    { id: '1', title: '결재 내역 A', amount: 10000 ,date: '2025-05-03', payway: '결재 장소', consumptionType: 'good'},
    { id: '2', title: '결재 내역 B', amount: 20000 ,date: '2025-05-03', payway: '결재 장소', consumptionType: 'bad'},
    { id: '3', title: '결재 내역 C', amount: 30000 ,date: '2025-05-03', payway: '결재 장소', consumptionType: 'good'},
];

const UseList = () => {
    const [items, setItems] = useState(initialData);

    // jQuery UI 드래그 앤 드랍 초기화
    useEffect(() => {
        $('#sortable').sortable({
            axis: 'y',
            update: (event, ui) => {
                const newOrder = $('#sortable').sortable('toArray');
                const reorderedItems = newOrder.map(id => items.find(item => item.id === id));
                setItems(reorderedItems);
            }
        });

        // datepicker 초기화
        $('.datepicker').datepicker({
            dateFormat: 'yy-mm-dd'

        });
        $('.datepicker').datepicker('setDate', 'today');
        // 리턴시 effect 정리
        return () => {
            $('.datepicker').datepicker('destroy');
        };
    }, [items]);

    // 내역 수정 핸들러
    const handleChange = (id, field, value) => {
        const updated = items.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setItems(updated);
    };
    // 소비 유형을 아이콘으로 설정하는 함수
    const getConsumptionIcon = (type, id) => {
        const handleIconClick = (newType) => {
            // 클릭 시 소비 유형 업데이트
            handleChange(id, 'consumptionType', newType);
        };

        return (
            <div className="consumption-icons">
                <FaSmile
                    title="좋은 소비"
                    style={{
                        fontSize: '24px',
                        cursor: 'pointer',
                        color: type === 'good' ? 'green' : 'gray',
                    }}
                    onClick={() => handleIconClick('good')}
                />
                <FaMeh
                    title="일반 소비"
                    style={{
                        fontSize: '24px',
                        cursor: 'pointer',
                        color: type === 'neutral' ? 'yellowgreen' : 'gray',
                    }}
                    onClick={() => handleIconClick('neutral')}
                />
                <FaFrown
                    title="나쁜 소비"
                    style={{
                        fontSize: '24px',
                        cursor: 'pointer',
                        color: type === 'bad' ? 'red' : 'gray',
                    }}
                    onClick={() => handleIconClick('bad')}
                />
            </div>
        );
    };

    return (
        <div className="container mt-4">
            <h2>결재 내역 수정 및 순서 변경</h2>

            <ul id="sortable" className="list-group">
                {items.map(item => (
                    <li key={item.id} id={item.id} className="list-group-item d-flex align-items-center">
                        <span className="me-2">☰</span>
                        <input
                            type="text"
                            value={item.date}
                            onChange={(e) => handleChange(item.id, 'date', e.target.value)}
                            className="form-control me-2 datepicker"
                            style={{maxWidth: '120px'}}
                        />
                        <input
                            type="text"
                            value={item.payway}
                            onChange={(e) => handleChange(item.id, 'payway', e.target.value)}
                            className="form-control me-2"
                            style={{maxWidth: '300px'}}
                        />
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleChange(item.id, 'title', e.target.value)}
                            className="form-control me-2"
                            style={{maxWidth: '200px'}}
                        />
                        <input
                            type="number"
                            value={item.amount}
                            onChange={(e) => handleChange(item.id, 'amount', e.target.value)}
                            className="form-control me-2"
                            style={{maxWidth: '120px'}}
                        />
                        <div className="me-2">
                            {getConsumptionIcon(item.consumptionType, item.id)}
                        </div>
                    </li>
                ))}
            </ul>

            <button className="btn btn-primary mt-3" onClick={() => console.log(items)}>
                저장
            </button>
        </div>
    );
};

export default UseList;
