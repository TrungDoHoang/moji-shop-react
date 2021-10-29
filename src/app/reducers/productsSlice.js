import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../axios'

export const getProducts = createAsyncThunk('products/get', () => {
    return API.get('product/read.php')
                .then((response) => response.data)
                .catch(err => err.message)
})
export const productDetail = createAsyncThunk('products/getDetail', (id) => {
    return API.get(`product/show.php?id=${id}`)
                .then((response) => response.data)
                .catch(err => err.message)
})
export const productsByCat = createAsyncThunk('products/getByCats', (id) => {
    return API.get(`product/readbycat.php?machude=${id}`)
                .then((response) => response.data)
                .catch(err => err.message)
})
export const productSearch = createAsyncThunk('products/search', (key) => {
    return API.get(`product/search.php?key=${key}`)
                .then((response) => response.data)
                .catch(err => err.message)
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [
        //     {
        //         id: 1,
        //         category: 'so_vo',
        //         name: 'Squishy MJ Momo duck nháy mắt 7cm',
        //         cost: 50000,
        //         img: '21071018_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 2,
        //         category: 'so_vo',
        //         name: 'Sổ vở kế hoạch Monthly Thỏ Bunny flowers 7x9',
        //         cost: 50000,
        //         img: '20091002_XX_thumb_450x450.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 3,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Cat meow holiday',
        //         cost: 25000,
        //         img: '20112228_XX_thumb_450x450.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 4,
        //         category: 'so_vo',
        //         name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
        //         cost: 54000,
        //         img: '21012339_XX_thumb_450x450.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 5,
        //         category: 'so_vo',
        //         name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
        //         cost: 50000,
        //         img: '21052103_XX_thumb_450x450.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 6,
        //         category: 'so_vo',
        //         name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
        //         cost: 70000,
        //         img: '21060014_xx_thumb.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 7,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Retro film',
        //         cost: 40000,
        //         img: '21070013_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 8,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
        //         cost: 35000,
        //         img: '21070014_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 9,
        //         category: 'so_vo',
        //         name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
        //         cost: 50000,
        //         img: '21052103_XX_thumb_450x450.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 10,
        //         category: 'so_vo',
        //         name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
        //         cost: 70000,
        //         img: '21060014_xx_thumb.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 11,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Retro film',
        //         cost: 40000,
        //         img: '21070013_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 12,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
        //         cost: 35000,
        //         img: '21070014_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 13,
        //         category: 'so_vo',
        //         name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
        //         cost: 54000,
        //         img: '21012339_XX_thumb_450x450.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 14,
        //         category: 'so_vo',
        //         name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
        //         cost: 50000,
        //         img: '21052103_XX_thumb_450x450.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 15,
        //         category: 'so_vo',
        //         name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
        //         cost: 70000,
        //         img: '21060014_xx_thumb.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 16,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Retro film',
        //         cost: 40000,
        //         img: '21070013_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 17,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
        //         cost: 35000,
        //         img: '21070014_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 18,
        //         category: 'so_vo',
        //         name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
        //         cost: 50000,
        //         img: '21052103_XX_thumb_450x450.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 19,
        //         category: 'so_vo',
        //         name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
        //         cost: 70000,
        //         img: '21060014_xx_thumb.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 20,
        //         category: 'so_vo',
        //         name: 'Sổ vở B5 MJ Retro film',
        //         cost: 40000,
        //         img: '21070013_XX_thumb.JPG',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 21,
        //         category: 'sach_giao_khoa',
        //         name: 'Sách Giáo Khoa Bộ Lớp 5 - Sách Bài Tập (Bộ 11 Cuốn) (2021)',
        //         cost: 40000,
        //         img: 'sachtv5.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 22,
        //         category: 'sach_giao_khoa',
        //         name: 'Sách Giáo Khoa Bộ Lớp 12 - Sách Bài Tập (Bộ 8 Cuốn) (2021)',
        //         cost: 120400,
        //         img: 'hoa_12.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 23,
        //         category: 'sach_giao_khoa',
        //         name: 'Sách Giáo Khoa Bộ Lớp 11 - Sách Bài Tập (Bộ 8 Cuốn) (2021)',
        //         cost: 121900,
        //         img: 'hoa_11.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 24,
        //         category: 'sach_khoa_hoc',
        //         name: 'Khoa Học Khám Phá - Dữ Liệu Lớn (Tái Bản 2020)',
        //         cost: 119000,
        //         img: 'du_lieu_lon.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 25,
        //         category: 'sach_khoa_hoc',
        //         name: 'Khoa Học Khám Phá - Câu Chuyện Cơ Thể Con Người: Tiến Hóa, Sức Khỏe Và Bệnh Tật',
        //         cost: 169500,
        //         img: 'co_the_nguoi.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 26,
        //         category: 'sach_khoa_hoc',
        //         name: 'Khoa Học Về Nấu Ăn - The Science Of Cooking',
        //         cost: 297500,
        //         img: 'khoa_hoc_nau_an.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 27,
        //         category: 'truyen_ngon_tinh',
        //         name: 'Mắt Biếc (Tái Bản 2019)',
        //         cost: 119000,
        //         img: 'mat_biec.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 28,
        //         category: 'truyen_ngon_tinh',
        //         name: 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập)',
        //         cost: 206400,
        //         img: 'lbt_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 29,
        //         category: 'truyen_ngon_tinh',
        //         name: 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập: 6.7) - Tặng Kèm Bookmark + Thiệp Cưới',
        //         cost: 211560,
        //         img: 'lbt_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 30,
        //         category: 'but_ngo_nghinh',
        //         name: 'Bút nhớ dòng Bạch tuộc màu sắc cute set5',
        //         cost: 70000,
        //         img: 'but_nho_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 31,
        //         category: 'but_ngo_nghinh',
        //         name: 'Bút nhớ dòng Baby cosplay khủng long cute set3',
        //         cost: 45000,
        //         img: 'but_nho_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 32,
        //         category: 'but_ngo_nghinh',
        //         name: 'Bút viết Khủng long cổ dài cute',
        //         cost: 10000,
        //         img: 'but_nho_3.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 33,
        //         category: 'balo_thoi_trang',
        //         name: 'Balo vải Mrmibag ngăn hộp trong suốt khóa cài phối màu 12x30x41',
        //         cost: 290000,
        //         img: 'balo_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 34,
        //         category: 'balo_thoi_trang',
        //         name: 'Balo gấu bông Vịt cute letter B 30cm',
        //         cost: 160000,
        //         img: 'balo_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 35,
        //         category: 'balo_thoi_trang',
        //         name: 'Balo gấu bông Alpaca cute màu sắc 40cm',
        //         cost: 320000,
        //         img: 'balo_3.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 36,
        //         category: 'thuoc_ke',
        //         name: 'Thước kẻ Happy baby bear flowers bling 15cm',
        //         cost: 30000,
        //         img: 'thuoc_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 37,
        //         category: 'thuoc_ke',
        //         name: 'Thước kẻ Little girl happy day bling 15cm',
        //         cost: 30000,
        //         img: 'thuoc_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 38,
        //         category: 'thuoc_ke',
        //         name: 'Thước kẻ Sweetheart girl 15cm',
        //         cost: 30000,
        //         img: 'thuoc_3.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 39,
        //         category: 'hop_but_da_nang',
        //         name: 'Hộp bút MJ Lovely animals 4x10x21',
        //         cost: 90000,
        //         img: 'hop_but_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 40,
        //         category: 'hop_but_da_nang',
        //         name: 'Hộp bút lớn Rabbit cat love 7x7x18',
        //         cost: 80000,
        //         img: 'hop_but_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 41,
        //         category: 'hop_but_da_nang',
        //         name: 'Hộp bút MJ Baby bear rabbit lông xù blow bubbles sweet fruits 8x19',
        //         cost: 60000,
        //         img: 'hop_but_3.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 42,
        //         category: 'dung_cu_hoc_tap_khac',
        //         name: 'Dập ghim mini Fruit Avocado trái bơ cartoon happy',
        //         cost: 20000,
        //         img: 'dung_cu_1.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 43,
        //         category: 'dung_cu_hoc_tap_khac',
        //         name: 'Máy tính MJ Little girl with pet eating time 5x8',
        //         cost: 60000,
        //         img: 'dung_cu_2.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        //     {
        //         id: 44,
        //         category: 'dung_cu_hoc_tap_khac',
        //         name: 'Cục tẩy gôm Cute penguin má hồng',
        //         cost: 10000,
        //         img: 'dung_cu_3.jpg',
        //         mota: 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.'
        //     },
        ],
        currentProduct: [],
        resultSearch: [],
        productDetail: {},
        productsByCategory: [],
    },
    reducers: {
        // searchProducts: (state, action) => {
        //     function normalizeStr(str) {
        //         return str.normalize('NFD')
        //             .replace(/[\u0300-\u036f]/g, '')
        //             .replace(/đ/g, 'd').replace(/Đ/g, 'D');
        //     }
        //     var search_string = action.payload.toLowerCase()
        //     state.resultSearch = state.allProducts.filter(i => {
        //         return (i.name.toLowerCase().indexOf(search_string) !== -1
        //             || search_string.indexOf(i.name.toLowerCase()) !== -1
        //             || normalizeStr(i.name.toLowerCase()).indexOf(search_string) !== -1
        //             || search_string.indexOf(normalizeStr(i.name.toLowerCase())) !== -1
        //         )
        //     })
        // },
        filterByCategory: (state, action) => {
            const category = action.payload
            state.productsByCategory = state.allProducts.filter(product => product.category === category)
        }
    },
    extraReducers:{
        [getProducts.fulfilled]: (state, action) => {
            let data = action.payload.product
            if(data){
                state.allProducts = data.map(product => {
                    return {
                        ...product,
                        cost: Number.parseInt(product.cost),
                        SoLuong: Number.parseInt(product.SoLuong)
                    }
                })
            }else{
                state.allProducts = []
            }
        },
        [getProducts.rejected]: (state, action) => {
            console.error("Get product from database not success!!")
        },

        // show detail
        [productDetail.fulfilled]: (state, action) => {
            let data = action.payload
            if(data){
                state.productDetail = {
                    ...data,
                    cost : Number.parseInt(data.cost),
                    SoLuong: Number.parseInt(data.SoLuong)
                }
            }
            else{
                state.productDetail = {}
            }
        },
        [productDetail.rejected]: (state, action) => {
            console.error("Show detail product from database not success!!")

        },

        [productsByCat.fulfilled]: (state, action) => {
            let data = action.payload.product
            if(data){
                state.productsByCategory = data.map(product => {
                    return {
                        ...product,
                        cost: Number.parseInt(product.cost),
                        SoLuong: Number.parseInt(product.SoLuong)
                    }
                })
            }
            else{
                state.productsByCategory = []
            }
        },
        [productsByCat.rejected]: (state, action) => {
            console.error("Get product by category from database not success!!")
        },

        [productSearch.pending]: (state, action) => {
            state.resultSearch = []
        },
        [productSearch.fulfilled]: (state, action) => {
            let data = action.payload.product
            if(data){
                state.resultSearch = data.map(product => {
                    return {
                        ...product,
                        cost: Number.parseInt(product.cost),
                        SoLuong: Number.parseInt(product.SoLuong)
                    }
                })
            }else{
                state.resultSearch = []
            }
        },
        [productSearch.rejected]: (state, action) => {
            console.error("Search product from database not success!!")
        },
    }
})

// export reducer
const productsReducer = productsSlice.reducer

// export action
export const { searchProducts, filterByCategory } = productsSlice.actions

// selector
export const productsSelector = state => state.productsReducer.allProducts
export const productDetailSelector = state => state.productsReducer.productDetail
export const productsSearchSelector = state => state.productsReducer.resultSearch
export const productsByCategorySelector = state => state.productsReducer.productsByCategory

export default productsReducer