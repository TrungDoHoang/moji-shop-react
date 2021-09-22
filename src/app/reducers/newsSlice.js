import {createSlice} from '@reduxjs/toolkit'

const newsSlice = createSlice({
    name : 'News-post',
    initialState: {
        news: [
            {
                id: 1,
                img: 'KM1.png',
                title: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                timeCreated: 'Oct 05, 2020',
                description: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
            {
                id: 2,
                img: 'KM2.png',
                title: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                timeCreated: 'Oct 05, 2020',
                description: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
            {
                id: 3,
                img: 'KM3.png',
                title: 'CHÍNH SÁCH CHIẾT KHẤU HOA SÁP SỐ LƯỢNG LỚN',
                timeCreated: 'Oct 05, 2020',
                description: 'Nhằm đáp ứng nhu cầu biếu, tặng của các đối tác Moji nhân ngày Phụ nữ Việt Nam 20/10, Moji xin thông báo đến các Quý khách hàng chính sách chiết khấu hoa sáp số lượng lớn',
                linkTo: 'https://moji.vn/chinh-sach-chiet-khau-hoa-sap-so-luong-lon-n72412.html'
            },
    
        ],
        posts: [
            {
                id: 4,
                img: 'first.png',
                title: 'QUY TRÌNH TUYỂN DỤNG KHỐI CỬA HÀNG MOJI',
                timeCreated: 'Jan 01, 2021',
                description: 'Quy trình tuyển dụng khối Cửa hàng Moji',
                linkTo: 'https://moji.vn/quy-trinh-tuyen-dung-khoi-cua-hang-moji-n55009.html'
            },
            {
                id: 5,
                img: 'posts1.png',
                title: '[HN] MOJI TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG',
                timeCreated: 'Mar 01, 2021',
                description: 'Với sự phát triển quy mô ngày càng mạnh mẽ của Chuỗi cửa hàng Phụ kiện & Quà Tặng Moji, chúng mình đang tìm kiếm những bạn trẻ nhiệt huyết, đáng yêu về với vị trí: Nhân viên bán hàng Full/part-time tại các cơ sở Hà Nội.',
                linkTo: 'https://moji.vn/hn-moji-tuyen-dung-nhan-vien-ban-hang-n53972.html'
            },
            {
                id: 6,
                img: 'posts2.png',
                title: '[HCM] MOJI TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG',
                timeCreated: 'Mar 01, 2021',
                description: 'Với sự phát triển quy mô ngày càng mạnh mẽ của Chuỗi cửa hàng Phụ kiện & Quà Tặng Moji, chúng mình đang tìm kiếm những bạn trẻ nhiệt huyết, đáng yêu về với vị trí: Nhân viên bán hàng Full/part-time tại các cơ sở Hà Nội.',
                linkTo: 'https://moji.vn/hcm-moji-tuyen-dung-nhan-vien-ban-hang-n53971.html'
            },
    
        ] 
    }
})

// export reducer
export const newsReducer = newsSlice.reducer

// export actions

// export selector
export const newsSelector = state => state.newsReducer.news
export const postsSelector = state => state.newsReducer.posts

export default newsReducer