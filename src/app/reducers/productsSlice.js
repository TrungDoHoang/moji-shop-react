import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [
            {
                id: 1,
                category: 'so_vo',
                name: 'Squishy MJ Momo duck nháy mắt 7cm',
                cost: 50000,
                img: '21071018_XX_thumb.JPG'
            },
            {
                id: 2,
                category: 'so_vo',
                name: 'Sổ vở kế hoạch Monthly Thỏ Bunny flowers 7x9',
                cost: 50000,
                img: '20091002_XX_thumb_450x450.JPG'
            },
            {
                id: 3,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Cat meow holiday',
                cost: 25000,
                img: '20112228_XX_thumb_450x450.JPG'
            },
            {
                id: 4,
                category: 'so_vo',
                name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
                cost: 54000,
                img: '21012339_XX_thumb_450x450.JPG'
            },
            {
                id: 5,
                category: 'so_vo',
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 6,
                category: 'so_vo',
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 7,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 8,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 9,
                category: 'so_vo',
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 10,
                category: 'so_vo',
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 11,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 12,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 13,
                category: 'so_vo',
                name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
                cost: 54000,
                img: '21012339_XX_thumb_450x450.JPG'
            },
            {
                id: 14,
                category: 'so_vo',
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 15,
                category: 'so_vo',
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 16,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 17,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
                cost: 35000,
                img: '21070014_XX_thumb.JPG'
            },
            {
                id: 18,
                category: 'so_vo',
                name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
                cost: 50000,
                img: '21052103_XX_thumb_450x450.jpg'
            },
            {
                id: 19,
                category: 'so_vo',
                name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
                cost: 70000,
                img: '21060014_xx_thumb.jpg'
            },
            {
                id: 20,
                category: 'so_vo',
                name: 'Sổ vở B5 MJ Retro film',
                cost: 40000,
                img: '21070013_XX_thumb.JPG'
            },
            {
                id: 21,
                category: 'sach_giao_khoa',
                name: 'Sách Giáo Khoa Bộ Lớp 5 - Sách Bài Tập (Bộ 11 Cuốn) (2021)',
                cost: 40000,
                img: 'sachtv5.jpg'
            },
            {
                id: 22,
                category: 'sach_giao_khoa',
                name: 'Sách Giáo Khoa Bộ Lớp 12 - Sách Bài Tập (Bộ 8 Cuốn) (2021)',
                cost: 120400,
                img: 'hoa_12.jpg'
            },
            {
                id: 23,
                category: 'sach_giao_khoa',
                name: 'Sách Giáo Khoa Bộ Lớp 11 - Sách Bài Tập (Bộ 8 Cuốn) (2021)',
                cost: 121900,
                img: 'hoa_11.jpg'
            },
            {
                id: 24,
                category: 'sach_khoa_hoc',
                name: 'Khoa Học Khám Phá - Dữ Liệu Lớn (Tái Bản 2020)',
                cost: 119000,
                img: 'du_lieu_lon.jpg'
            },
            {
                id: 25,
                category: 'sach_khoa_hoc',
                name: 'Khoa Học Khám Phá - Câu Chuyện Cơ Thể Con Người: Tiến Hóa, Sức Khỏe Và Bệnh Tật',
                cost: 169500,
                img: 'co_the_nguoi.jpg'
            },
            {
                id: 26,
                category: 'sach_khoa_hoc',
                name: 'Khoa Học Về Nấu Ăn - The Science Of Cooking',
                cost: 297500,
                img: 'khoa_hoc_nau_an.jpg'
            },
            {
                id: 27,
                category: 'truyen_ngon_tinh',
                name: 'Mắt Biếc (Tái Bản 2019)',
                cost: 119000,
                img: 'mat_biec.jpg'
            },
            {
                id: 28,
                category: 'truyen_ngon_tinh',
                name: 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập)',
                cost: 206400,
                img: 'lbt_1.jpg'
            },
            {
                id: 29,
                category: 'truyen_ngon_tinh',
                name: 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập: 6.7) - Tặng Kèm Bookmark + Thiệp Cưới',
                cost: 211560,
                img: 'lbt_2.jpg'
            },
            {
                id: 30,
                category: 'but_ngo_nghinh',
                name: 'Bút nhớ dòng Bạch tuộc màu sắc cute set5',
                cost: 70000,
                img: 'but_nho_1.jpg'
            },
            {
                id: 31,
                category: 'but_ngo_nghinh',
                name: 'Bút nhớ dòng Baby cosplay khủng long cute set3',
                cost: 45000,
                img: 'but_nho_2.jpg'
            },
            {
                id: 32,
                category: 'but_ngo_nghinh',
                name: 'Bút viết Khủng long cổ dài cute',
                cost: 10000,
                img: 'but_nho_3.jpg'
            },
            {
                id: 33,
                category: 'balo_thoi_trang',
                name: 'Balo vải Mrmibag ngăn hộp trong suốt khóa cài phối màu 12x30x41',
                cost: 290000,
                img: 'balo_1.jpg'
            },
            {
                id: 34,
                category: 'balo_thoi_trang',
                name: 'Balo gấu bông Vịt cute letter B 30cm',
                cost: 160000,
                img: 'balo_2.jpg'
            },
            {
                id: 35,
                category: 'balo_thoi_trang',
                name: 'Balo gấu bông Alpaca cute màu sắc 40cm',
                cost: 320000,
                img: 'balo_3.jpg'
            },
            {
                id: 36,
                category: 'thuoc_ke',
                name: 'Thước kẻ Happy baby bear flowers bling 15cm',
                cost: 30000,
                img: 'thuoc_1.jpg'
            },
            {
                id: 37,
                category: 'thuoc_ke',
                name: 'Thước kẻ Little girl happy day bling 15cm',
                cost: 30000,
                img: 'thuoc_2.jpg'
            },
            {
                id: 38,
                category: 'thuoc_ke',
                name: 'Thước kẻ Sweetheart girl 15cm',
                cost: 30000,
                img: 'thuoc_3.jpg'
            },
            {
                id: 39,
                category: 'hop_but_da_nang',
                name: 'Hộp bút MJ Lovely animals 4x10x21',
                cost: 90000,
                img: 'hop_but_1.jpg'
            },
            {
                id: 40,
                category: 'hop_but_da_nang',
                name: 'Hộp bút lớn Rabbit cat love 7x7x18',
                cost: 80000,
                img: 'hop_but_2.jpg'
            },
            {
                id: 41,
                category: 'hop_but_da_nang',
                name: 'Hộp bút MJ Baby bear rabbit lông xù blow bubbles sweet fruits 8x19',
                cost: 60000,
                img: 'hop_but_3.jpg'
            },
            {
                id: 42,
                category: 'dung_cu_hoc_tap_khac',
                name: 'Dập ghim mini Fruit Avocado trái bơ cartoon happy',
                cost: 20000,
                img: 'dung_cu_1.jpg'
            },
            {
                id: 43,
                category: 'dung_cu_hoc_tap_khac',
                name: 'Máy tính MJ Little girl with pet eating time 5x8',
                cost: 60000,
                img: 'dung_cu_2.jpg'
            },
            {
                id: 44,
                category: 'dung_cu_hoc_tap_khac',
                name: 'Cục tẩy gôm Cute penguin má hồng',
                cost: 10000,
                img: 'dung_cu_3.jpg'
            },
        ],
        resultSearch: [],
        productsByCategory: [],
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
        },
        filterByCategory: (state, action) => {
            const category = action.payload
            state.productsByCategory = state.allProducts.filter(product => product.category === category)
        }
    }
})

// export reducer
const productsReducer = productsSlice.reducer

// export action
export const { searchProducts, filterByCategory } = productsSlice.actions

// selector
export const productsSelector = state => state.productsReducer.allProducts
export const productsSearchSelector = state => state.productsReducer.resultSearch
export const productsByCategorySelector = state => state.productsReducer.productsByCategory

export default productsReducer