import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './CostSlider.css'
import {getSan_pham, san_phamSelector} from '../../app/reducers/adminSlice'
import { useDispatch, useSelector } from 'react-redux';
import { changeMinMax, productsByCategorySelector } from '../../app/reducers/productsSlice';
import { useHistory } from 'react-router';

function CostSlider() {
    const product = useSelector(san_phamSelector)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const dispatch = useDispatch()
    if (product.length <= 0){
        throw dispatch(getSan_pham())
    }
    function addSeparator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    const minmax = function() {
        if(product){
            const cost = product.map(item => item.cost)
            const min = Math.min.apply(Math, cost) 
            const max = Math.max.apply(Math, cost) 
            return [max,min]
        }
    }()

    function rangeInputChangeEventHandler(e) {
        var minBtn = $(e.target).parent().children('.min'),
            maxBtn = $(e.target).parent().children('.max'),
            range_min = $(e.target).parent().children('.range_min'),
            range_max = $(e.target).parent().children('.range_max'),
            minVal = parseInt($(minBtn).val()),
            maxVal = parseInt($(maxBtn).val()),
            origin = $(e.target).attr('class');

        if (origin === 'min' && minVal > maxVal - 5) {
            $(minBtn).val(maxVal - 1000);
        }
        var minVal = parseInt($(minBtn).val());
        setFrom(minVal)
        $(range_min).html(addSeparator(minVal) + ' VNĐ');


        if (origin === 'max' && maxVal - 1000 < minVal) {
            $(maxBtn).val(1000 + minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        setTo(maxVal)
        $(range_max).html(addSeparator(maxVal) + ' VNĐ');
    }
    const location = useHistory()
    useEffect(() => {
        dispatch(changeMinMax([minmax[1], minmax[0]]))
        $('.min').val(minmax[1])
        $('.max').val(minmax[0])
        $('.range_min').text(Number.parseInt($('.min').val()).toLocaleString() + ' VNĐ')
        $('.range_max').text(Number.parseInt($('.max').val()).toLocaleString() + ' VNĐ')
    },[location.location.key])
    const mouseUp = () =>{
        dispatch(changeMinMax([from,to]))
    }

    return (
        <div className="rangeslider mb-5">
            <input className="min" name="range_1" type="range" step="1000" onMouseUp={mouseUp} min={minmax[1]} onInput={rangeInputChangeEventHandler} max={minmax[0]} defaultValue={minmax[1]} />
            <input className="max" name="range_1" type="range" step="1000" onMouseUp={mouseUp} min={minmax[1]} onInput={rangeInputChangeEventHandler} max={minmax[0]} defaultValue={minmax[0]} />
            <span className="range_min light left">{minmax[1].toLocaleString()} VNĐ</span>
            <span className="range_max light right">{minmax[0].toLocaleString()} VNĐ</span>
            
        </div>

    )
}

export default CostSlider
