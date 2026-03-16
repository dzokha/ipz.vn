import './styles/App.css';

function App() {
  return (
    <div className="landing-wrapper">
      <div className="content-container">
        
        {/* Phần Tên thương hiệu */}
        <h1 className="brand-alias">IPZ</h1>
        <h2 className="brand-fullname">INTELLECTUAL PROTECTION ZERO</h2>
        
        {/* Điểm nhấn Rao bán */}
        <div className="sale-badge">TÊN MIỀN ĐANG ĐƯỢC RAO BÁN</div>
        <p className="sale-subtitle">PREMIUM DOMAIN FOR SALE</p>
        
        {/* Thông tin liên hệ chuyên nghiệp */}
        <div className="contact-box">
          <p className="contact-label">LIÊN HỆ MUA TÊN MIỀN:</p>
          {/* Thẻ <a> với mailto giúp khách hàng click vào là mở ứng dụng gửi mail ngay */}
          <a href="mailto:dzokha1010@gmail.com" className="contact-email">
            dzokha1010@gmail.com
          </a>
        </div>
        
        {/* Footer */}
        <div className="footer">
          <p>© 2026 IPZ. All Rights Reserved.</p>
        </div>

      </div>
    </div>
  );
}

export default App;