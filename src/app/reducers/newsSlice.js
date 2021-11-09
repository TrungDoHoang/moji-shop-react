import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from '../axios'

export const getTinTuc = createAsyncThunk('News-post/get', () => {
    return API.get('news/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const showTinTuc = createAsyncThunk('News-post/show', (data) => {
    return API.get('news/show.php?id='+data)
        .then((response) => response.data)
        .catch(err => err.message)
})
const newsSlice = createSlice({
    name : 'News-post',
    initialState: {
        news: [
            {
                MaTinTuc: 1,
                Anh: 'KM1.png',
                TieuDe: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                NgayTao: 'Oct 05, 2020',
                MoTa: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
            {
                MaTinTuc: 2,
                Anh: 'KM2.png',
                TieuDe: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                NgayTao: 'Oct 05, 2020',
                MoTa: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
            {
                MaTinTuc: 3,
                Anh: 'KM3.png',
                TieuDe: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                NgayTao: 'Oct 05, 2020',
                MoTa: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
    
        ],
        posts: [
            {
                MaTinTuc: 4,
                Anh: 'first.png',
                TieuDe: 'QUY TRÌNH TUYỂN DỤNG KHỐI CỬA HÀNG MOJI',
                NgayTao: 'Jan 01, 2021',
                MoTa: 'Quy trình tuyển dụng khối Cửa hàng Moji',
                linkTo: 'https://moji.vn/quy-trinh-tuyen-dung-khoi-cua-hang-moji-n55009.html'
            },
            {
                MaTinTuc: 5,
                Anh: 'posts1.png',
                TieuDe: '[HN] MOJI TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG',
                NgayTao: 'Mar 01, 2021',
                MoTa: 'Với sự phát triển quy mô ngày càng mạnh mẽ của Chuỗi cửa hàng Phụ kiện & Quà Tặng Moji, chúng mình đang tìm kiếm những bạn trẻ nhiệt huyết, đáng yêu về với vị trí: Nhân viên bán hàng Full/part-time tại các cơ sở Hà Nội.',
                linkTo: 'https://moji.vn/hn-moji-tuyen-dung-nhan-vien-ban-hang-n53972.html'
            },
            {
                MaTinTuc: 6,
                Anh: 'posts2.png',
                TieuDe: '[HCM] MOJI TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG',
                NgayTao: 'Mar 01, 2021',
                MoTa: 'Với sự phát triển quy mô ngày càng mạnh mẽ của Chuỗi cửa hàng Phụ kiện & Quà Tặng Moji, chúng mình đang tìm kiếm những bạn trẻ nhiệt huyết, đáng yêu về với vị trí: Nhân viên bán hàng Full/part-time tại các cơ sở Hà Nội.',
                linkTo: 'https://moji.vn/hcm-moji-tuyen-dung-nhan-vien-ban-hang-n53971.html'
            },
    
        ] ,
        detail:{}
    },
    extraReducers: {
        [showTinTuc.fulfilled]: (state, action) => {
            let data = action.payload
            if(data){
                state.detail = data
            }
        },
        [getTinTuc.fulfilled]: (state, action) => {
            let data = action.payload
            if(data && data.news){
                state.news = data.news
            }
            if(data && data.posts){
                state.posts = data.posts
            }
        }
    }
})

// export reducer
export const newsReducer = newsSlice.reducer

// export actions

// export selector
export const newsSelector = state => state.newsReducer.news
export const postsSelector = state => state.newsReducer.posts
export const detailSelector = state => state.newsReducer.detail

export default newsReducer