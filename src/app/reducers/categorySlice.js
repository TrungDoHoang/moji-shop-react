import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getCategories = createAsyncThunk('category/get', () => {
    return axios.get('http://localhost:8080/php/btlcnpm/api/category/read.php')
                .then((response) => response.data)
                .catch(err => err.message)
})

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        allCategory: [],
        bookCategory:  [
            // { id: 'sach_giao_khoa', name: 'Sách giáo khoa' },
            // { id: 'sach_khoa_hoc', name: 'Sách khoa học' },
            // { id: 'so_vo', name: 'Sổ vở' },
            // { id: 'truyen_ngon_tinh', name: 'Truyện ngôn tình' },
        ],
        toolCategory: [
            // { id: 'but_ngo_nghinh', name: 'Bút ngộ nghĩnh' },
            // { id: 'balo_thoi_trang', name: 'Balo thời trang' },
            // { id: 'thuoc_ke', name: 'Thước kẻ' },
            // { id: 'hop_but_da_nang', name: 'Hộp bút đa năng' },
            // { id: 'dung_cu_hoc_tap_khac', name: 'Dụng cụ học tập khác' },
        ]
    },
    extraReducers:{
        [getCategories.fulfilled]: (state, action) => {
            let data = action.payload.category
            if(data){
                data = data.map(value => {
                    return {
                        ...value,
                        isSach : Number.parseInt(value.isSach)
                    }
                })
                state.bookCategory = data.filter(val => val.isSach === 1)
                state.toolCategory = data.filter(val => val.isSach === 0)
                state.allCategory = data
            }
        },
        [getCategories.rejected]:(state, action) => {
            console.log('Failed to fetch todos from backend!!!')
        }
    }
})

// export reducer
export const categoryReducer = categorySlice.reducer

// Export action

// Export selectors
export const allCategorySelector = state => state.categoryReducer.allCategory 
export const bookCategorySelector = state => state.categoryReducer.bookCategory 
export const toolCategorySelector = state => state.categoryReducer.toolCategory

export default categoryReducer