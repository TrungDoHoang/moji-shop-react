import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [
            {
                id: 1,
                name: 'Squishy MJ Momo duck nháy mắt 7cm',
                cost: 50000,
                img: '21071018_XX_thumb.JPG'
            },
            {
                id: 2,
                name: 'Sổ vở kế hoạch Monthly Thỏ Bunny flowers 7x9',
                cost: 50000,
                img: '20091002_XX_thumb_450x450.JPG'
            },
            {
                id: 3,
                name: 'Sổ vở B5 MJ Cat meow holiday',
                cost: 25000,
                img: '20112228_XX_thumb_450x450.JPG'
            },
            {
                id: 4,
                name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
                cost: 54000,
                img: '21012339_XX_thumb_450x450.JPG'
            },
            {
                id: 5,
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 6,
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 7,
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 8,
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 9,
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 10,
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 11,
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 12,
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 13,
                name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
                cost: 54000,
                img: '21012339_XX_thumb_450x450.JPG'
            },
            {
                id: 14,
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 15,
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 16,
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 17,
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 18,
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 19,
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 20,
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
        ],
        resultSearch: []
    },
    reducers: {
        searchProducts: (state, action) => {
            function normalizeStr(str) {
                return str.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/đ/g, 'd').replace(/Đ/g, 'D');
            }
            var search_string = action.payload.toLowerCase()
            state.resultSearch = state.allProducts.filter(i => {
                return (i.name.toLowerCase().indexOf(search_string) != -1
                    || search_string.indexOf(i.name.toLowerCase()) != -1
                    || normalizeStr(i.name.toLowerCase()).indexOf(search_string) != -1
                    || search_string.indexOf(normalizeStr(i.name.toLowerCase())) != -1
                )
            })
        }
    }
})

// export reducer
const productsReducer = productsSlice.reducer

// export action
export const { searchProducts } = productsSlice.actions

// selector
export const productsSelector = state => state.productsReducer.allProducts
export const productsSearchSelector = state => state.productsReducer.resultSearch

export default productsReducer