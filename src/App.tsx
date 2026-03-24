import './styles/App.css';
// Import logo (giả định bạn đã lưu vào src/assets/logo.png)
import logoShield from './assets/images/ipz.png'; 

function App() {
  return (
    <div className="page-wrapper">
      
      {/* HEADER: Chứa Logo và Tiêu đề H1 chuẩn SEO */}
      <header className="hero-header">
        <div className="container text-center">
          <div className="brand-box">
             <img src={logoShield} alt="Logo IPZ" className="brand-logo" />
             <div className="brand-text">
               <h1 className="brand-alias">I P Z</h1>
               <h2 className="brand-fullname">ZERO TRUST</h2>
             </div>
          </div>
          
          <p className="hero-description">
            <strong>Bảo vệ tài sản số & ý tưởng kinh doanh của bạn</strong><br/>
            Giải pháp kết hợp An ninh mạng & Sở hữu trí tuệ dành cho Doanh nghiệp
          </p>
          <a href="#contact" className="btn-primary">Nhận tư vấn miễn phí</a>
        </div>
      </header>

      {/* MAIN: Chứa nội dung lõi của trang */}
      <main className="main-content">
        <div className="container">
          
          {/* Lưới 1: Đặt Vấn đề & Giải pháp cạnh nhau */}
          <div className="content-grid mb-40">
            <section className="info-card problem-card">
              <h2 className="card-title">Doanh nghiệp đang đối mặt với gì?</h2>
              <ul className="list-styled error-list">
                <li>Bị hack website, rò rỉ hoặc mất dữ liệu quan trọng</li>
                <li>Bị sao chép phần mềm, đánh cắp ý tưởng kinh doanh</li>
                <li>Lúng túng trong thủ tục đăng ký bảo hộ sở hữu trí tuệ</li>
                <li>Thiếu đội ngũ IT chuyên sâu về an toàn thông tin</li>
              </ul>
            </section>

            <section className="info-card solution-card">
              <h2 className="card-title">IPZ giúp bạn giải quyết như thế nào?</h2>
              <div className="solution-items">
                <div className="item">
                  <h3>🛡️ Audit bảo mật</h3>
                  <p>Kiểm tra toàn diện hệ thống, phát hiện và vá lỗ hổng.</p>
                </div>
                <div className="item">
                  <h3>⚖️ Bảo vệ sở hữu trí tuệ</h3>
                  <p>Tư vấn chiến lược và hướng dẫn đăng ký bảo hộ tài sản số.</p>
                </div>
                <div className="item">
                  <h3>👥 Đào tạo nội bộ</h3>
                  <p>Nâng cao nhận thức bảo mật cho toàn bộ nhân sự.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Lưới 2: Dịch vụ & Chuyên gia */}
          <div className="content-grid">
            <section className="info-card outline-card">
              <h2 className="card-title">Dịch vụ chính</h2>
              <ul className="service-tags">
                <li>Gói Audit nhanh <span>(3 - 10 triệu VNĐ)</span></li>
                <li>Tư vấn bảo hộ IP <span>(5 - 20 triệu VNĐ)</span></li>
                <li>Đào tạo an ninh mạng cho doanh nghiệp</li>
              </ul>
            </section>

            <section className="info-card outline-card">
              <h2 className="card-title">Về chuyên gia</h2>
              <p className="about-text">
                <strong>16 năm kinh nghiệm thực chiến</strong> trong quản lý nhà nước, thẩm định dự án công nghệ, sở hữu trí tuệ và an ninh mạng. 
                <br/><br/>
                Đồng thời là giảng viên, tác giả sách và nhà nghiên cứu khoa học.
              </p>
            </section>
          </div>

        </div>
      </main>

      {/* FOOTER & CTA: Gọn gàng, tập trung chuyển đổi (Conversion) */}
      <footer id="contact" className="site-footer">
        <div className="container text-center">
          <h2 className="cta-title">Bắt đầu bảo vệ doanh nghiệp ngay hôm nay</h2>
          <p className="cta-desc">Đăng ký nhận tư vấn miễn phí trong 30 phút từ chuyên gia.</p>
          
          <div className="contact-action">
            <p className="contact-label">GỬI YÊU CẦU ĐẾN EMAIL:</p>
            <a href="mailto:dzokha1010@gmail.com" className="contact-email">
              dzokha1010@gmail.com
            </a>
          </div>
          
          <p className="copyright">© 2026 IPZ.vn - Bảo vệ tài sản số & Sở hữu trí tuệ.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;