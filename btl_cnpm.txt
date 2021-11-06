-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 03, 2021 lúc 10:42 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `btl_cnpm`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tchitiethdb`
--

CREATE TABLE `tchitiethdb` (
  `SoHDB` int(10) NOT NULL,
  `MaSanPham` int(10) NOT NULL,
  `SLBan` int(100) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tchitiethdb`
--

INSERT INTO `tchitiethdb` (`SoHDB`, `MaSanPham`, `SLBan`) VALUES
(6, 43, 3),
(6, 44, 3),
(7, 40, 1),
(7, 38, 1),
(7, 37, 1),
(7, 39, 3),
(7, 44, 10),
(7, 42, 21),
(9, 43, 10),
(10, 42, 11),
(11, 74, 10),
(12, 63, 10),
(13, 44, 1),
(14, 43, 2),
(14, 44, 2),
(15, 43, 2),
(15, 44, 2),
(16, 43, 2),
(16, 44, 2),
(17, 39, 12);

--
-- Bẫy `tchitiethdb`
--
DELIMITER $$
CREATE TRIGGER `update_thoadon_after_delete_cthoadon` BEFORE DELETE ON `tchitiethdb` FOR EACH ROW UPDATE thoadonban SET Total = Total - (SELECT DonGiaBan * old.SLBan FROM tsanpham WHERE tsanpham.MaSanPham = old.MaSanPham) WHERE SoHDB = old.SoHDB
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_thoadon_after_update_tchitiethd` BEFORE UPDATE ON `tchitiethdb` FOR EACH ROW UPDATE thoadonban SET thoadonban.Total = thoadonban.Total + (SELECT tsanpham.DonGiaBan * NEW.SLBan FROM tsanpham WHERE tsanpham.MaSanPham = NEW.MaSanPham) - (SELECT tsanpham.DonGiaBan * OLD.SLBan FROM tsanpham WHERE tsanpham.MaSanPham = OLD.MaSanPham) WHERE SoHDB = OLD.SoHDB
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_thoadon_before_create_tchitiethd` BEFORE INSERT ON `tchitiethdb` FOR EACH ROW UPDATE thoadonban set Total = Total + (SELECT tsanpham.DonGiaBan * NEW.SLBan FROM tsanpham WHERE tsanpham.MaSanPham = NEW.MaSanPham ) WHERE SoHDB = NEW.SoHDB
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_tsanpham_after_create_tchitiethd` AFTER INSERT ON `tchitiethdb` FOR EACH ROW UPDATE tsanpham SET tsanpham.SoLuong = tsanpham.SoLuong - new.SLBan 
WHERE tsanpham.MaSanPham = new.MaSanPham
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_tsanpham_after_update_tchitiethd` BEFORE UPDATE ON `tchitiethdb` FOR EACH ROW UPDATE tsanpham SET tsanpham.SoLuong = tsanpham.SoLuong - new.SLBan + old.SLBan 
WHERE tsanpham.MaSanPham = new.MaSanPham
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_tsanpham_before_delete_tchitiethd` BEFORE DELETE ON `tchitiethdb` FOR EACH ROW UPDATE tsanpham SET tsanpham.SoLuong = tsanpham.SoLuong + old.SLBan 
WHERE tsanpham.MaSanPham = old.MaSanPham
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tchude`
--

CREATE TABLE `tchude` (
  `MaChuDe` int(100) NOT NULL,
  `TenChuDe` varchar(1000) DEFAULT NULL,
  `isSach` tinyint(1) NOT NULL,
  `TenVanTat` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tchude`
--

INSERT INTO `tchude` (`MaChuDe`, `TenChuDe`, `isSach`, `TenVanTat`) VALUES
(1, 'Sách giáo khoa', 1, 'sach_giao_khoa'),
(2, 'Sách khoa học', 1, 'sach_khoa_hoc'),
(3, 'Sổ vở', 1, 'so_vo'),
(4, 'Truyện ngôn tình', 1, 'truyen_ngon_tinh'),
(5, 'Bút ngộ nghĩnh', 0, 'but_ngo_nghinh'),
(6, 'Balo thời trang', 0, 'balo_thoi_trang'),
(7, 'Thước kẻ', 0, 'thuoc_ke'),
(8, 'Hộp bút đa năng', 0, 'hop_but_da_nang'),
(9, 'Dụng cụ học tập khác', 0, 'dung_cu_hoc_tap_khac');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thoadonban`
--

CREATE TABLE `thoadonban` (
  `SoHDB` int(10) NOT NULL,
  `NgayBan` datetime DEFAULT current_timestamp(),
  `MaKH` int(10) NOT NULL,
  `Status` tinyint(4) NOT NULL DEFAULT 0,
  `Total` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `thoadonban`
--

INSERT INTO `thoadonban` (`SoHDB`, `NgayBan`, `MaKH`, `Status`, `Total`) VALUES
(6, '2021-10-29 09:27:44', 10, 1, 150000),
(7, '2021-10-29 10:17:58', 7, 0, 930000),
(9, '2021-10-29 11:34:58', 7, 1, 600000),
(10, '2021-11-01 18:58:31', 10, 0, 220000),
(11, '2021-11-03 03:22:00', 1, 0, 3100000),
(12, '2021-11-03 03:24:00', 1, 0, 525000),
(13, '2021-11-03 09:52:00', 1, 0, 10000),
(14, '2021-11-03 10:04:53', 7, 0, 220000),
(15, '2021-11-03 10:06:00', 7, 0, 140000),
(16, '2021-11-03 10:07:00', 7, 0, 140000),
(17, '2021-11-03 10:08:00', 1, 0, 1080000);

--
-- Bẫy `thoadonban`
--
DELIMITER $$
CREATE TRIGGER `update_tchitiet_after_delete_thoadon` BEFORE DELETE ON `thoadonban` FOR EACH ROW DELETE FROM tchitiethdb WHERE
tchitiethdb.SoHDB = old.SoHDB
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tkhachhang`
--

CREATE TABLE `tkhachhang` (
  `MaKH` int(10) NOT NULL,
  `TenKH` varchar(50) DEFAULT NULL,
  `DiaChi` varchar(150) DEFAULT NULL,
  `DienThoai` varchar(11) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tkhachhang`
--

INSERT INTO `tkhachhang` (`MaKH`, `TenKH`, `DiaChi`, `DienThoai`, `NgaySinh`) VALUES
(1, 'Trần Đình Bắc', 'Bắc Ninh', '0968686868', '2000-01-01'),
(2, 'Nguyễn Đình Sơn', 'Hải Dương', '0918273645', '2021-11-02'),
(3, 'Đỗ Văn Bắc', 'Portugal', '0918688685', '2021-11-05'),
(5, 'Mạnh Thường Quân', 'Argentina', '0978656790', '2021-11-01'),
(6, 'M10', 'Hà Nội', '0971537915', '2000-01-15'),
(7, 'Trung Hoàng', 'Hà Nội', '012345678', '2021-10-01'),
(8, 'Tài khoản test2', 'Hà Nội', '012345678', '2000-01-15'),
(9, 'Đỗ Hoàng Trung', 'Hà Nội', '012345678', '2000-01-15'),
(10, 'Đỗ Thị Thùy', 'Bắc Ninh', '0123456789', '2000-01-16'),
(11, 'Tài khoản test', 'Hà Nội', '098765421', '2021-01-01');

--
-- Bẫy `tkhachhang`
--
DELIMITER $$
CREATE TRIGGER `update_ttaikhoan_after_before_delete_kh` AFTER DELETE ON `tkhachhang` FOR EACH ROW DELETE FROM ttaikhoan WHERE ttaikhoan.MaKH = old.MaKH
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tloaitin`
--

CREATE TABLE `tloaitin` (
  `MaLoaiTin` int(11) NOT NULL,
  `TenLoaitin` text NOT NULL,
  `mota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tloaitin`
--

INSERT INTO `tloaitin` (`MaLoaiTin`, `TenLoaitin`, `mota`) VALUES
(1, 'Tin khuyến mãi', 'Các tin tức về đợt khuyến mãi, giảm giá, các chính sách của shop'),
(2, 'Tin tuyển dụng', 'Các tin tuyển dụng thành viên mới của shop');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tnhacungcap`
--

CREATE TABLE `tnhacungcap` (
  `MaNCC` int(10) NOT NULL,
  `TenNCC` varchar(200) DEFAULT NULL,
  `DienThoai` varchar(11) NOT NULL,
  `DiaChi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tnhacungcap`
--

INSERT INTO `tnhacungcap` (`MaNCC`, `TenNCC`, `DienThoai`, `DiaChi`) VALUES
(1, 'Bách Việt', '0123456789', 'Hà Nội'),
(2, 'NXB Trẻ', '0123456789', 'Hà Nội'),
(3, 'Phú Hà book', '0123456789', 'Hà Nội'),
(4, 'Alphabooks', '0123456789', 'Hà Nội'),
(5, 'TGM Books', '0123456789', 'Hà Nội'),
(6, 'Thái Hà', '0123456789', 'Hà Nội');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tnhanvien`
--

CREATE TABLE `tnhanvien` (
  `MaNV` int(10) NOT NULL,
  `TenNV` varchar(50) DEFAULT NULL,
  `DiaChi` varchar(150) DEFAULT NULL,
  `DienThoai` varchar(15) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `MaQuyen` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tnhanvien`
--

INSERT INTO `tnhanvien` (`MaNV`, `TenNV`, `DiaChi`, `DienThoai`, `NgaySinh`, `MaQuyen`) VALUES
(1, 'Hoàng Trung', 'Hưng Yên', '0123456789', NULL, 1),
(2, 'Thùy Đỗ', 'Bắc Ninh', '0987654321', NULL, 2),
(3, 'Vân Bùi', 'Hải Phòng', '0987654321', NULL, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tnhaxuatban`
--

CREATE TABLE `tnhaxuatban` (
  `MaNXB` int(10) NOT NULL,
  `TenNXB` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tnhaxuatban`
--

INSERT INTO `tnhaxuatban` (`MaNXB`, `TenNXB`) VALUES
(0, ''),
(1, 'NXB Kim Đồng'),
(2, 'NXB Trẻ'),
(3, 'NXB Thăng Long'),
(4, 'NXB Nhã Nam'),
(5, 'NXB Giáo Dục'),
(6, 'NXB Fahasa'),
(7, 'NXB Phương Nam'),
(8, 'NXB ĐH GTVT'),
(9, 'NXB ĐH QGHN'),
(10, 'NXB Thủ Đô');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tquyen`
--

CREATE TABLE `tquyen` (
  `MaQuyen` int(10) NOT NULL,
  `TenQuyen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tquyen`
--

INSERT INTO `tquyen` (`MaQuyen`, `TenQuyen`) VALUES
(1, 'Quản lý'),
(2, 'Bán hàng'),
(3, 'Nhập hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tsanpham`
--

CREATE TABLE `tsanpham` (
  `MaSanPham` int(100) NOT NULL,
  `TenSanPham` varchar(200) DEFAULT NULL,
  `MaChuDe` int(200) NOT NULL,
  `MaNXB` int(200) NOT NULL,
  `DonGiaBan` int(200) NOT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  `Anh` varchar(200) DEFAULT NULL,
  `MoTa` text DEFAULT NULL,
  `isSach` tinyint(1) DEFAULT NULL,
  `MaNCC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tsanpham`
--

INSERT INTO `tsanpham` (`MaSanPham`, `TenSanPham`, `MaChuDe`, `MaNXB`, `DonGiaBan`, `SoLuong`, `Anh`, `MoTa`, `isSach`, `MaNCC`) VALUES
(1, 'Squishy MJ Momo duck nháy mắt 7cm', 3, 4, 50000, 202, '21071018_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(2, 'Sổ vở kế hoạch Monthly Thỏ Bunny flowers 7x9', 3, 2, 50000, 200, '20091002_XX_thumb_450x450.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(3, 'Sổ vở B5 MJ Cat meow holiday', 3, 2, 25000, 200, '20112228_XX_thumb_450x450.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(4, 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang', 3, 2, 54000, 200, '21012339_XX_thumb_450x450.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(5, 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ', 3, 2, 50000, 200, '21052103_XX_thumb_450x450.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(6, 'Sổ vở A5 MJ Little girl sweet mango fruit', 3, 2, 70000, 200, '21060014_xx_thumb.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(7, 'Sổ vở B5 MJ Retro film', 3, 2, 40000, 200, '21070013_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(8, 'Sổ vở B5 MJ Jellycat bartholomew baby bear', 3, 2, 35000, 200, '21070014_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(9, 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ', 3, 2, 50000, 200, '21052103_XX_thumb_450x450.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(10, 'Sổ vở A5 MJ Little girl sweet mango fruit', 3, 4, 70000, 200, '21060014_xx_thumb.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 3),
(11, 'Sổ vở B5 MJ Retro film', 3, 5, 40000, 400, '21070013_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 5),
(12, 'Sổ vở B5 MJ Jellycat bartholomew baby bear', 3, 2, 35000, 500, '21070014_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(13, 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang', 3, 3, 54000, 300, '21012339_XX_thumb_450x450.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 2),
(14, 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ', 3, 1, 50000, 500, '21052103_XX_thumb_450x450.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 3),
(15, 'Sổ vở A5 MJ Little girl sweet mango fruit', 3, 6, 70000, 700, '21060014_xx_thumb.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 6),
(16, 'Sổ vở B5 MJ Retro film', 3, 2, 40000, 400, '21070013_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(17, 'Sổ vở B5 MJ Jellycat bartholomew baby bear', 3, 5, 35000, 350, '21070014_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 6),
(18, 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ', 3, 3, 50000, 500, '21052103_XX_thumb_450x450.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 6),
(19, 'Sổ vở A5 MJ Little girl sweet mango fruit', 3, 5, 70000, 700, '21060014_xx_thumb.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(20, 'Sổ vở B5 MJ Retro film', 3, 3, 40000, 400, '21070013_XX_thumb.JPG', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 2),
(21, 'Sách Giáo Khoa Bộ Lớp 5 - Sách Bài Tập (Bộ 11 Cuốn) (2021)', 1, 7, 40000, 400, 'sachtv5.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(22, 'Sách Giáo Khoa Bộ Lớp 12 - Sách Bài Tập (Bộ 8 Cuốn) (2021)', 1, 8, 120400, 120, 'hoa_12.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(23, 'Sách Giáo Khoa Bộ Lớp 11 - Sách Bài Tập (Bộ 8 Cuốn) (2021)', 1, 9, 121900, 150, 'hoa_11.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 3),
(24, 'Khoa Học Khám Phá - Dữ Liệu Lớn (Tái Bản 2020)', 2, 10, 119000, 190, 'du_lieu_lon.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 6),
(25, 'Khoa Học Khám Phá - Câu Chuyện Cơ Thể Con Người: Tiến Hóa, Sức Khỏe Và Bệnh Tật', 2, 9, 169500, 169, 'co_the_nguoi.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(26, 'Khoa Học Về Nấu Ăn - The Science Of Cooking', 2, 8, 297500, 300, 'khoa_hoc_nau_an.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 2),
(27, 'Mắt Biếc (Tái Bản 2019)', 4, 7, 119000, 200, 'mat_biec.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 4),
(28, 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập)', 4, 1, 206400, 206, 'lbt_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 1),
(29, 'Bảy Năm Vẫn Ngoảnh Về Phương Bắc (Bộ 2 Tập: 6.7) - Tặng Kèm Bookmark + Thiệp Cưới', 4, 9, 211560, 300, 'lbt_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 1, 5),
(30, 'Bút nhớ dòng Bạch tuộc màu sắc cute set5', 5, 0, 70000, 700, 'but_nho_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 2),
(31, 'Bút nhớ dòng Baby cosplay khủng long cute set3', 5, 0, 45000, 450, 'but_nho_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 5),
(32, 'Bút viết Khủng long cổ dài cute', 5, 0, 10000, 1000, 'but_nho_3.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 6),
(33, 'Balo vải Mrmibag ngăn hộp trong suốt khóa cài phối màu 12x30x41', 6, 0, 290000, 290, 'balo_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 1),
(34, 'Balo gấu bông Vịt cute letter B 30cm', 6, 0, 160000, 160, 'balo_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 4),
(35, 'Balo gấu bông Alpaca cute màu sắc 40cm', 6, 0, 320000, 320, 'balo_3.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 6),
(36, 'Thước kẻ Happy baby bear flowers bling 15cm', 7, 0, 30000, 300, 'thuoc_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 2),
(37, 'Thước kẻ Little girl happy day bling 15cm', 7, 0, 30000, 300, 'thuoc_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 5),
(38, 'Thước kẻ Sweetheart girl 15cm', 7, 0, 30000, 300, 'thuoc_3.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 4),
(39, 'Hộp bút MJ Lovely animals 4x10x21', 8, 0, 90000, 888, 'hop_but_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 3),
(40, 'Hộp bút lớn Rabbit cat love 7x7x18', 8, 0, 80000, 800, 'hop_but_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 4),
(41, 'Hộp bút MJ Baby bear rabbit lông xù blow bubbles sweet fruits 8x19', 8, 0, 60000, 600, 'hop_but_3.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 1),
(42, 'Dập ghim mini Fruit Avocado trái bơ cartoon happy', 9, 0, 20000, 189, 'dung_cu_1.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 3),
(43, 'Máy tính MJ Little girl with pet eating time 5x8', 9, 0, 60000, 593, 'dung_cu_2.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 6),
(44, 'Cục tẩy gôm Cute penguin má hồng', 9, 0, 10000, 992, 'dung_cu_3.jpg', 'Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.', 0, 1),
(63, 'Làm Thế Nào Để Kết Giao Với Người Lạ', 2, 5, 52500, 990, 'nguoi_la.jpg', 'Trong cuộc sống và công việc hằng ngày, chúng ta thường phải làm quen với những người bạn mới, giao tiếp với những người lạ, đàm phán với những đối tác làm ăn mới, điều này càng trở nên phổ biến hơn đối với những người làm nhân viên tiếp thị hay bán hàng. Đây vừa là một việc đầy thú vị, nhưng đồng thời cũng nhiều thử thách và mang lại không ít thử thách cho chúng ta.\n\nChúng ta đều biết rằng, một người bình thường sẽ cảm thấy đôi chút hồi hộp khi phải xuất hiện ở nơi đông người, chẳng hạn như tham gia một buổi liên hoan hoặc một sự kiện nào đó. Mặc dù hiện tượng tâm lí này không gây ảnh hưởng quá lớn đến chúng ta, nhưng đôi lúc biểu hiện của chúng ta có thể sẽ khiến người khác cảm thấy không vừa lòng, thậm chí đến chính bản thân chúng ta cũng không hài lòng. Ví dụ, khi tham gia các buổi họp hợp tác kinh doanh, rất nhiều người thường mắc phải lỗi bày tỏ quan điểm cá nhân quá gay gắt hoặc không phát biểu ý kiến nào, vì thế để lại ấn tượng không mấy tốt đẹp cho đối phương. Một ví dụ khác, một nhân viên kinh doanh đi chào bán sản phẩm của mình, anh ta lấy hết dũng khí để nói chuyện với khách hàng nhưng vì bỏ qua những thông tin thực sự ẩn sau lời nói của khách hàng nên bị từ chối, đợi đến lúc tìm ra nguyên nhân thì không kịp nữa rồi.\n\nỞ mỗi ngành nghề, dù là công chức, nhân viên bán hàng hay tiếp thị, thậm chí là diễn viên cũng đều gặp phải bài kiểm tra tâm lí như đã mô tả ở trên. Hơn nữa, những sai lầm tương tự cũng thường diễn ra dưới các hình thức khác nhau. Đây là nguyên nhân vì sao lại có nhiều người sầu não bởi những vấn đề trong mối quan hệ giữa người với người như vậy.\n\nNhững vấn đề này rất phổ biến nhưng tại sao lại không được giải quyết một cách hiệu quả? Nguyên nhân là do hành vi của con người chịu sự tác động của tâm lí và quá trình con người giao tiếp với nhau thực tế cũng là quá trình đấu tranh về mặt tâm lí.\n\nXét về tổng thể, cuốn sách này sẽ giúp chúng ta khắc phục những trở ngại tâm lí khi giao tiếp với người lạ, đồng thời đi sâu giải thích những hành động hiệu quả mà chúng ta có thể áp dụng để cải thiện các mối quan hệ xã hội của bản thân. Đây không phải là một cuốn sách chuyên ngành tâm lí học, mà là cuốn sách hướng dẫn về tâm lí học nhằm chỉ cho chúng ta cách xây dựng tốt mối quan hệ với người khác. Hi vọng thông qua việc cải thiện trạng thái tâm lí của bản thân, bạn có thể học thêm được nhiều kĩ năng tâm lí trong giao tiếp, đồng thời kết giao được nhiều bạn bè hơn. Cuối cùng bạn sẽ nhận ra rằng, giao tiếp với người lạ là một việc rất vui vẻ trong cuộc sống chứ không phải là một việc mang lại cho mình nhiều buồn phiền.\n\nMã hàng	8936067602654\nTên Nhà Cung Cấp	Minh Long\nTác giả	Miêu Nhất Mai, Tôn Hải Phương\nNgười Dịch	Nguyệt Minh\nNXB	NXB Thanh Niên\nNăm XB	2019\nTrọng lượng (gr)	350\nKích Thước Bao Bì	14.5 x 20.5 cm\nSố trang	335\nHình thức	Bìa Mềm\nSản phẩm bán chạy nhất	Top 100 sản phẩm Kỹ năng sống bán chạy của tháng\nSách: Làm Thế Nào Để Kết Giao Với Người Lạ\n\nTrong cuộc sống và công việc hằng ngày, chúng ta thường phải làm quen với những người bạn mới, giao tiếp với những người lạ, đàm phán với những đối tác làm ăn mới, điều này càng trở nên phổ biến hơn đối với những người làm nhân viên tiếp thị hay bán hàng. Đây vừa là một việc đầy thú vị, nhưng đồng thời cũng nhiều thử thách và mang lại không ít thử thách cho chúng ta.\n\nChúng ta đều biết rằng, một người bình thường sẽ cảm thấy đôi chút hồi hộp khi phải xuất hiện ở nơi đông người, chẳng hạn như tham gia một buổi liên hoan hoặc một sự kiện nào đó. Mặc dù hiện tượng tâm lí này không gây ảnh hưởng quá lớn đến chúng ta, nhưng đôi lúc biểu hiện của chúng ta có thể sẽ khiến người khác cảm thấy không vừa lòng, thậm chí đến chính bản thân chúng ta cũng không hài lòng. Ví dụ, khi tham gia các buổi họp hợp tác kinh doanh, rất nhiều người thường mắc phải lỗi bày tỏ quan điểm cá nhân quá gay gắt hoặc không phát biểu ý kiến nào, vì thế để lại ấn tượng không mấy tốt đẹp cho đối phương. Một ví dụ khác, một nhân viên kinh doanh đi chào bán sản phẩm của mình, anh ta lấy hết dũng khí để nói chuyện với khách hàng nhưng vì bỏ qua những thông tin thực sự ẩn sau lời nói của khách hàng nên bị từ chối, đợi đến lúc tìm ra nguyên nhân thì không kịp nữa rồi.\n\nỞ mỗi ngành nghề, dù là công chức, nhân viên bán hàng hay tiếp thị, thậm chí là diễn viên cũng đều gặp phải bài kiểm tra tâm lí như đã mô tả ở trên. Hơn nữa, những sai lầm tương tự cũng thường diễn ra dưới các hình thức khác nhau. Đây là nguyên nhân vì sao lại có nhiều người sầu não bởi những vấn đề trong mối quan hệ giữa người với người như vậy.\n\nNhững vấn đề này rất phổ biến nhưng tại sao lại không được giải quyết một cách hiệu quả? Nguyên nhân là do hành vi của con người chịu sự tác động của tâm lí và quá trình con người giao tiếp với nhau thực tế cũng là quá trình đấu tranh về mặt tâm lí.\n\nXét về tổng thể, cuốn sách này sẽ giúp chúng ta khắc phục những trở ngại tâm lí khi giao tiếp với người lạ, đồng thời đi sâu giải thích những hành động hiệu quả mà chúng ta có thể áp dụng để cải thiện các mối quan hệ xã hội của bản thân. Đây không phải là một cuốn sách chuyên ngành tâm lí học, mà là cuốn sách hướng dẫn về tâm lí học nhằm chỉ cho chúng ta cách xây dựng tốt mối quan hệ với người khác. Hi vọng thông qua việc cải thiện trạng thái tâm lí của bản thân, bạn có thể học thêm được nhiều kĩ năng tâm lí trong giao tiếp, đồng thời kết giao được nhiều bạn bè hơn. Cuối cùng bạn sẽ nhận ra rằng, giao tiếp với người lạ là một việc rất vui vẻ trong cuộc sống chứ không phải là một việc mang lại cho mình nhiều buồn phiền.', 1, 4),
(74, 'Balo vải Micobag big stamp 14x29x44', 6, 0, 310000, 990, 'balo_4.jpg', 'Thiết kế hình hộp đứng gọn nhẹ, ôm sát lưng\n\n- Ba Lô học sinh Tiger Family Jolly New 2021 được thiết kế cân đối hình hộp đứng, ôm sát lưng giúp giảm trọng lực khi mang ba lô.\n\n- Nắp ba lô được thiết kế đặc biệt ôm trọn miệng trên balo giúp chống nước tuyệt đối.\n\nHệ thống phản quang bảo vệ bé\n\nĐặc biệt ba lô được trang bị hệ thống phản quang tại 6 vị trí: quai đeo, 2 bên hông, phía trước ba lô giúp cho bé đeo ba lô vào buổi tối được an toàn\n\nKích thước đựng vừa khổ A4', 0, 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ttaikhoan`
--

CREATE TABLE `ttaikhoan` (
  `tendangnhap` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `MaKH` int(11) NOT NULL,
  `MaNV` int(11) NOT NULL,
  `MatKhau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ttaikhoan`
--

INSERT INTO `ttaikhoan` (`tendangnhap`, `email`, `MaKH`, `MaNV`, `MatKhau`) VALUES
('abc123', 'abc123@gmail.com', 6, 0, 'abc123'),
('admin', 'thuy@gmail.com', 10, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH1', 'nv1@gmail.com', 1, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH2', 'nv1@gmail.com', 2, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH3', 'nv1@gmail.com', 3, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH4', 'nv1@gmail.com', 4, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH5', 'nv1@gmail.com', 5, 0, 'e99a18c428cb38d5f260853678922e03'),
('KH9', 'nv1@gmail.com', 9, 0, 'e99a18c428cb38d5f260853678922e03'),
('taikhoantest', 'tktest@gmail.com', 11, 0, 'e99a18c428cb38d5f260853678922e03'),
('testtk1', 'abc@gmail.com', 7, 0, 'e99a18c428cb38d5f260853678922e03'),
('testtk2', 'test@gmail.com', 8, 0, 'e99a18c428cb38d5f260853678922e03'),
('trung123', 'hoangtrung@gmail.com', 0, 1, 'e99a18c428cb38d5f260853678922e03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ttintuc`
--

CREATE TABLE `ttintuc` (
  `MaTinTuc` int(11) NOT NULL,
  `TieuDe` varchar(500) NOT NULL,
  `MoTa` varchar(1000) NOT NULL,
  `NoiDung` text NOT NULL,
  `Anh` text NOT NULL,
  `NgayTao` date NOT NULL DEFAULT current_timestamp(),
  `MaLoaiTin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tchude`
--
ALTER TABLE `tchude`
  ADD PRIMARY KEY (`MaChuDe`);

--
-- Chỉ mục cho bảng `thoadonban`
--
ALTER TABLE `thoadonban`
  ADD PRIMARY KEY (`SoHDB`);

--
-- Chỉ mục cho bảng `tkhachhang`
--
ALTER TABLE `tkhachhang`
  ADD PRIMARY KEY (`MaKH`);

--
-- Chỉ mục cho bảng `tloaitin`
--
ALTER TABLE `tloaitin`
  ADD PRIMARY KEY (`MaLoaiTin`);

--
-- Chỉ mục cho bảng `tnhacungcap`
--
ALTER TABLE `tnhacungcap`
  ADD PRIMARY KEY (`MaNCC`);

--
-- Chỉ mục cho bảng `tnhanvien`
--
ALTER TABLE `tnhanvien`
  ADD PRIMARY KEY (`MaNV`);

--
-- Chỉ mục cho bảng `tnhaxuatban`
--
ALTER TABLE `tnhaxuatban`
  ADD PRIMARY KEY (`MaNXB`);

--
-- Chỉ mục cho bảng `tquyen`
--
ALTER TABLE `tquyen`
  ADD PRIMARY KEY (`MaQuyen`);

--
-- Chỉ mục cho bảng `tsanpham`
--
ALTER TABLE `tsanpham`
  ADD PRIMARY KEY (`MaSanPham`);

--
-- Chỉ mục cho bảng `ttaikhoan`
--
ALTER TABLE `ttaikhoan`
  ADD PRIMARY KEY (`tendangnhap`),
  ADD UNIQUE KEY `tendangnhap` (`tendangnhap`),
  ADD UNIQUE KEY `tendangnhap_2` (`tendangnhap`);

--
-- Chỉ mục cho bảng `ttintuc`
--
ALTER TABLE `ttintuc`
  ADD PRIMARY KEY (`MaTinTuc`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tchude`
--
ALTER TABLE `tchude`
  MODIFY `MaChuDe` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `thoadonban`
--
ALTER TABLE `thoadonban`
  MODIFY `SoHDB` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `tkhachhang`
--
ALTER TABLE `tkhachhang`
  MODIFY `MaKH` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `tloaitin`
--
ALTER TABLE `tloaitin`
  MODIFY `MaLoaiTin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tnhanvien`
--
ALTER TABLE `tnhanvien`
  MODIFY `MaNV` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tnhaxuatban`
--
ALTER TABLE `tnhaxuatban`
  MODIFY `MaNXB` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `tquyen`
--
ALTER TABLE `tquyen`
  MODIFY `MaQuyen` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tsanpham`
--
ALTER TABLE `tsanpham`
  MODIFY `MaSanPham` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT cho bảng `ttintuc`
--
ALTER TABLE `ttintuc`
  MODIFY `MaTinTuc` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
