import {createSlice} from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        bookCategory:  [
            { id: 'sach_giao_khoa', name: 'Sách giáo khoa' },
            { id: 'sach_khoa_hoc', name: 'Sách khoa học' },
            { id: 'so_vo', name: 'Sổ vở' },
            { id: 'truyen_ngon_tinh', name: 'Truyện ngôn tình' },
        ],
        toolCategory: [
            { id: 'but_ngo_nghinh', name: 'Bút ngộ nghĩnh' },
            { id: 'balo_thoi_trang', name: 'Balo thời trang' },
            { id: 'thuoc_ke', name: 'Thước kẻ' },
            { id: 'hop_but_da_nang', name: 'Hộp bút đa năng' },
            { id: 'dung_cu_hoc_tap_khac', name: 'Dụng cụ học tập khác' },
        ]
    }
})

// export reducer
export const categoryReducer = categorySlice.reducer

// Export action

// Export selectors
export const bookCategorySelector = state => state.categoryReducer.bookCategory 
export const toolCategorySelector = state => state.categoryReducer.toolCategory

export default categoryReducer