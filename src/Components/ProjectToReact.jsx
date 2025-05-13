import React from "react";

function ProjectToReact() {
  return (
    <div>

      {/* Featured Properties Section (NEW) */}
      <section id="properties" className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
    text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
    text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
    text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
    text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              العقارات المميزة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              اكتشف أفضل العقارات المتاحة في مختلف مناطق المملكة العربية
              السعودية
            </p>
          </div>
          {/* Property Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  نوع العقار
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">جميع العقارات</option>
                  <option value="villa">فيلا</option>
                  <option value="apartment">شقة</option>
                  <option value="land">أرض</option>
                  <option value="commercial">تجاري</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  المدينة
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">جميع المدن</option>
                  <option value="riyadh">الرياض</option>
                  <option value="jeddah">جدة</option>
                  <option value="dammam">الدمام</option>
                  <option value="makkah">مكة المكرمة</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  السعر (حتى)
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">جميع الأسعار</option>
                  <option value={500000}>500,000 ريال</option>
                  <option value={1000000}>1,000,000 ريال</option>
                  <option value={2000000}>2,000,000 ريال</option>
                  <option value={5000000}>5,000,000 ريال</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-l from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <i className="fas fa-search ml-2" />
                  بحث
                </button>
              </div>
            </div>
          </div>
          {/* Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="property-badge">
                  <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    جديد
                  </span>
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="فيلا فاخرة"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      2,500,000 ريال
                    </span>
                    <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للبيع
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  فيلا فاخرة في شمال الرياض
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  فيلا حديثة بتصميم عصري، تتكون من 5 غرف نوم و6 حمامات ومسبح خاص
                  وحديقة واسعة.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>450 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bed ml-1" />
                    <span>5 غرف</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bath ml-1" />
                    <span>6 حمامات</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>حي النرجس، الرياض</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
            {/* Property Card 2 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="property-badge">
                  <span className="bg-gold-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    مميز
                  </span>
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="شقة فاخرة"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      1,200,000 ريال
                    </span>
                    <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للبيع
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  شقة فاخرة في وسط جدة
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  شقة فاخرة بإطلالة بحرية، تتكون من 3 غرف نوم و3 حمامات وصالة
                  واسعة ومطبخ مجهز بالكامل.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>180 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bed ml-1" />
                    <span>3 غرف</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bath ml-1" />
                    <span>3 حمامات</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>حي الشاطئ، جدة</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="أرض استثمارية"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      3,500,000 ريال
                    </span>
                    <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للبيع
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  أرض استثمارية في الدمام
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  أرض استثمارية في موقع استراتيجي، مناسبة لإقامة مشروع تجاري أو
                  سكني، مساحة كبيرة وسعر مميز.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>1200 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-road ml-1" />
                    <span>شارعين</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-file-contract ml-1" />
                    <span>صك إلكتروني</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>حي الشاطئ، الدمام</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
            {/* Property Card 4 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="property-badge">
                  <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    جديد
                  </span>
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="مكتب تجاري"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      80,000 ريال/سنة
                    </span>
                    <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للإيجار
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  مكتب تجاري في الرياض
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  مكتب تجاري فاخر في برج مكتبي حديث، مجهز بالكامل وجاهز
                  للاستخدام الفوري، موقع مميز في وسط المدينة.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>120 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-door-open ml-1" />
                    <span>4 غرف</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-parking ml-1" />
                    <span>2 مواقف</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>طريق الملك فهد، الرياض</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
            {/* Property Card 5 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="فيلا مودرن"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      3,200,000 ريال
                    </span>
                    <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للبيع
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  فيلا مودرن في المدينة المنورة
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  فيلا بتصميم مودرن فاخر، تتكون من 6 غرف نوم و7 حمامات ومسبح خاص
                  وحديقة واسعة ومجلس رجال ونساء منفصل.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>550 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bed ml-1" />
                    <span>6 غرف</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bath ml-1" />
                    <span>7 حمامات</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>حي الأزهري، المدينة المنورة</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
            {/* Property Card 6 */}
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="property-badge">
                  <span className="bg-gold-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    مميز
                  </span>
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="شقة دوبلكس"
                    className="property-image w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">
                      1,800,000 ريال
                    </span>
                    <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded">
                      للبيع
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  شقة دوبلكس في مكة المكرمة
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  شقة دوبلكس فاخرة بإطلالة مميزة، تتكون من 4 غرف نوم و4 حمامات
                  وصالتين ومطبخ مجهز بالكامل.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-ruler-combined ml-1" />
                    <span>250 م²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bed ml-1" />
                    <span>4 غرف</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-bath ml-1" />
                    <span>4 حمامات</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-700">
                    <i className="fas fa-map-marker-alt ml-1 text-primary-600" />
                    <span>حي العزيزية، مكة المكرمة</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-bold"
                  >
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              عرض المزيد من العقارات
              <i className="fas fa-chevron-down mr-2" />
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              مميزات خدماتنا العقارية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-search-location text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                اختيار موقع استراتيجي
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نساعدك في اختيار أفضل المواقع الاستراتيجية للاستثمار العقاري
                بناءً على دراسات السوق والتوجهات المستقبلية.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-chart-line text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                تحليل السوق العقاري
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نقدم تحليلات دقيقة لسوق العقارات السعودي لمساعدتك في اتخاذ
                قرارات استثمارية مدروسة ومربحة.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-file-contract text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                استشارات قانونية
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نوفر استشارات قانونية متخصصة في مجال العقارات لضمان سلامة
                تعاملاتك وحماية استثماراتك.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-hand-holding-usd text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                تمويل عقاري
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نساعدك في الحصول على أفضل خيارات التمويل العقاري المتاحة بما
                يتناسب مع احتياجاتك وإمكانياتك.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-bullhorn text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                تسويق عقاري
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نقدم خدمات تسويقية احترافية لعقاراتك تضمن الوصول إلى الجمهور
                المستهدف وتحقيق أعلى عائد ممكن.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <i className="fas fa-calculator text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-right">
                تقييم العقارات
              </h3>
              <p className="text-gray-600 text-center md:text-right">
                نوفر خدمات تقييم عقاري احترافية ودقيقة تساعدك في معرفة القيمة
                الحقيقية للعقارات قبل الشراء أو البيع.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              خدماتنا العقارية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات العقارية المتميزة لتلبية احتياجاتك
              الاستثمارية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-home text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  بيع وشراء العقارات
                </h3>
                <p className="text-gray-600">
                  نساعدك في بيع أو شراء العقارات بأفضل الأسعار وأعلى مستويات
                  الاحترافية.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-key text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  تأجير العقارات
                </h3>
                <p className="text-gray-600">
                  نوفر خدمات تأجير العقارات السكنية والتجارية بعقود آمنة وشروط
                  مناسبة.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-city text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  إدارة العقارات
                </h3>
                <p className="text-gray-600">
                  نقدم خدمات إدارة العقارات الاحترافية لضمان الحفاظ على قيمة
                  استثماراتك وتحقيق أعلى عائد ممكن.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  تطوير الأراضي
                </h3>
                <p className="text-gray-600">
                  نساعدك في تطوير الأراضي وتحويلها إلى مشاريع استثمارية ناجحة
                  تحقق أعلى عائد ممكن.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-clipboard-check text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  التقييم العقاري
                </h3>
                <p className="text-gray-600">
                  نقدم خدمات تقييم عقاري احترافية ودقيقة معتمدة من الجهات
                  المختصة.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="h-20 bg-primary-600 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                <i className="fas fa-handshake text-4xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  الوساطة العقارية
                </h3>
                <p className="text-gray-600">
                  نقدم خدمات وساطة عقارية احترافية تضمن إتمام الصفقات بشكل آمن
                  وسريع.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section (ENHANCED) */}
      <section id="projects" className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              مشاريعنا العقارية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              نماذج من المشاريع العقارية المميزة التي قمنا بتنفيذها
            </p>
          </div>
          {/* Projects Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="مشروع فلل فاخرة"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">مشروع فلل فاخرة</h3>
                  <p>مجمع سكني فاخر يضم 12 فيلا مستقلة في شمال الرياض</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="برج سكني"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">برج سكني</h3>
                  <p>برج سكني فاخر يضم 120 وحدة سكنية في وسط مدينة جدة</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="منتجع سياحي"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">منتجع سياحي</h3>
                  <p>منتجع سياحي فاخر على ساحل البحر الأحمر</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1636572011682-2154c53ba3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxyZWFsc3RhdGUlMjBDb21tZXJjaWFsJTIwY29tcGxleHxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">مجمع تجاري</h3>
                  <p>مجمع تجاري استثماري في المنطقة الشرقية</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542889601-399c4f3a8402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="أراضي استثمارية"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">أراضي استثمارية</h3>
                  <p>مشروع أراضي استثمارية في ضواحي المدينة المنورة</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="مكاتب إدارية"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">مكاتب إدارية</h3>
                  <p>برج مكاتب إدارية في المنطقة المالية بالرياض</p>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                    عرض المشروع
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Project (NEW) */}
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="مشروع مميز"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gold-600 text-white text-sm font-bold px-4 py-2 rounded-lg">
                    مشروع مميز
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-primary-800">
                  مجمع الواحة السكني
                </h3>
                <p className="text-gray-600 mb-6">
                  مشروع سكني متكامل يضم 50 فيلا فاخرة و100 شقة سكنية مع مرافق
                  متكاملة تشمل مسابح ونوادي رياضية وحدائق ومساحات خضراء واسعة.
                  يقع المشروع في موقع استراتيجي في شمال الرياض.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary-600 ml-2" />
                    <span className="text-gray-700">شمال الرياض</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-ruler-combined text-primary-600 ml-2" />
                    <span className="text-gray-700">20,000 م²</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-home text-primary-600 ml-2" />
                    <span className="text-gray-700">150 وحدة سكنية</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-primary-600 ml-2" />
                    <span className="text-gray-700">اكتمل في 2023</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-l from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    عرض تفاصيل المشروع
                  </button>
                  <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    معرض الصور
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  استثمر
                </span>
                <span
                  className="font-bold
text-primary-800"
                />
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            استثمر في مستقبلك العقاري
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            نحن نساعدك في اتخاذ القرار الاستثماري الصحيح في سوق العقارات
            السعودي. تواصل معنا اليوم للحصول على استشارة عقارية مجانية.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              سجل بياناتك معنا
            </a>
            <a
              href="#properties"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              تصفح العقارات
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              تواصل معنا
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على استفساراتك وتقديم المساعدة في كل ما يتعلق
              بخدماتنا العقارية
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">
                أرسل رسالتك
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="name"
                    >
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="email"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="phone"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="service"
                  >
                    الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="buy">شراء عقار</option>
                    <option value="sell">بيع عقار</option>
                    <option value="rent">تأجير عقار</option>
                    <option value="invest">استثمار عقاري</option>
                    <option value="consult">استشارة عقارية</option>
                    <option value="other">خدمة أخرى</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="message"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="اكتب رسالتك هنا"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-l from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-800">
                  معلومات التواصل
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl ml-4">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">
                        البريد الإلكتروني
                      </h4>
                      <p className="text-gray-600">info@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl ml-4">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">الهاتف</h4>
                      <p className="text-gray-600">+966 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl ml-4">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">العنوان</h4>
                      <p className="text-gray-600">المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-800">
                  تابعنا على
                </h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300"
                  >
                    <i className="fab fa-snapchat-ghost" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Floating CTA */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
        <a
          href="#contact"
          className="flex items-center bg-gradient-to-l from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <i className="fas fa-headset text-xl ml-2" />
          <span>تواصل معنا</span>
        </a>
      </div>
      {/* certification section */}
      {/* Professional Certifications Section */}
      <section
        id="certifications"
        className="py-20 md:py-28 bg-gradient-to-br from-primary-900/5 to-gold-500/5 overflow-hidden relative"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              شهادات الاعتماد والتوثيق
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-gold-600 to-gold-500 mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              نفتخر بحصولنا على أعلى شهادات الاعتماد والتوثيق في مجال الخدمات
              العقارية بالمملكة العربية السعودية
            </p>
          </div>
          {/* First Row: 3 Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Certificate 1 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Certificate Header */}
              <div className="bg-gradient-to-l from-primary-700 to-primary-900 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      شهادة اعتماد الهيئة العامة للعقار
                    </h3>
                    <p className="text-white/80 text-sm">
                      الترخيص الرسمي لمزاولة النشاط العقاري
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-white text-2xl" />
                  </div>
                </div>
              </div>
              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden rounded-lg border-8 border-gray-100 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="شهادة الهيئة العامة للعقار"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center">
                      <img
                        src="logo.png"
                        alt="شعار الهيئة"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-hashtag text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">رقم الترخيص</p>
                      <p className="font-bold text-gray-800">
                        SA-2023-12345-RE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-check text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-800">15 يناير 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-alt text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الانتهاء</p>
                      <p className="font-bold text-gray-800">15 يناير 2026</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated Border on Hover */}
              <div className="h-1 w-0 bg-gradient-to-l from-primary-500 to-gold-500 group-hover:w-full transition-all duration-700" />
            </div>
            {/* Certificate 2 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group md:transform md:translate-y-8">
              {/* Certificate Header */}
              <div className="bg-gradient-to-l from-gold-600 to-gold-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      شهادة عضوية الغرفة التجارية
                    </h3>
                    <p className="text-white/80 text-sm">
                      عضوية الغرفة التجارية الصناعية بالرياض
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-building text-white text-2xl" />
                  </div>
                </div>
              </div>
              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden rounded-lg border-8 border-gray-100 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="شهادة الغرفة التجارية"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center">
                      <img
                        src="logo.png"
                        alt="شعار الغرفة التجارية"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-hashtag text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">رقم العضوية</p>
                      <p className="font-bold text-gray-800">CC-2023-78901</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-check text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-800">3 مارس 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-alt text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الانتهاء</p>
                      <p className="font-bold text-gray-800">3 مارس 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated Border on Hover */}
              <div className="h-1 w-0 bg-gradient-to-l from-gold-500 to-gold-700 group-hover:w-full transition-all duration-700" />
            </div>
            {/* Certificate 3 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Certificate Header */}
              <div className="bg-gradient-to-l from-primary-800 to-primary-600 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      شهادة الوساطة العقارية
                    </h3>
                    <p className="text-white/80 text-sm">
                      ترخيص مزاولة نشاط الوساطة العقارية
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-handshake text-white text-2xl" />
                  </div>
                </div>
              </div>
              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden rounded-lg border-8 border-gray-100 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="شهادة الوساطة العقارية"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center">
                      <img
                        src="logo.png"
                        alt="شعار وزارة الإسكان"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-hashtag text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">رقم الترخيص</p>
                      <p className="font-bold text-gray-800">BR-2023-56789</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-check text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-800">20 فبراير 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-alt text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الانتهاء</p>
                      <p className="font-bold text-gray-800">20 فبراير 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated Border on Hover */}
              <div className="h-1 w-0 bg-gradient-to-l from-primary-500 to-primary-700 group-hover:w-full transition-all duration-700" />
            </div>
          </div>
          {/* Second Row: 2 Additional Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Certificate 4 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Certificate Header */}
              <div className="bg-gradient-to-l from-primary-600 to-gold-600 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      شهادة التقييم العقاري
                    </h3>
                    <p className="text-white/80 text-sm">
                      ترخيص مزاولة نشاط التقييم العقاري
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-chart-line text-white text-2xl" />
                  </div>
                </div>
              </div>
              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden rounded-lg border-8 border-gray-100 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="شهادة التقييم العقاري"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center">
                      <img
                        src="logo.png"
                        alt="شعار هيئة التقييم"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-hashtag text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">رقم الترخيص</p>
                      <p className="font-bold text-gray-800">EV-2023-34567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-check text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-800">10 أبريل 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-alt text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الانتهاء</p>
                      <p className="font-bold text-gray-800">10 أبريل 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated Border on Hover */}
              <div className="h-1 w-0 bg-gradient-to-l from-primary-500 to-gold-500 group-hover:w-full transition-all duration-700" />
            </div>
            {/* Certificate 5 */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group md:transform md:translate-y-8">
              {/* Certificate Header */}
              <div className="bg-gradient-to-l from-gold-700 to-primary-700 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      شهادة التطوير العقاري
                    </h3>
                    <p className="text-white/80 text-sm">
                      ترخيص مزاولة نشاط التطوير العقاري
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="fas fa-city text-white text-2xl" />
                  </div>
                </div>
              </div>
              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden rounded-lg border-8 border-gray-100 shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="شهادة التطوير العقاري"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center">
                      <img
                        src="logo.png"
                        alt="شعار هيئة التطوير"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-hashtag text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">رقم الترخيص</p>
                      <p className="font-bold text-gray-800">RD-2023-90123</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-check text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-800">5 مايو 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <i className="fas fa-calendar-alt text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">تاريخ الانتهاء</p>
                      <p className="font-bold text-gray-800">5 مايو 2026</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated Border on Hover */}
              <div className="h-1 w-0 bg-gradient-to-l from-gold-500 to-primary-500 group-hover:w-full transition-all duration-700" />
            </div>
          </div>
          {/* Trust Badge */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <i className="fas fa-shield-alt text-primary-600 text-4xl" />
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  موثوق ومعتمد رسمياً
                </h3>
                <p className="text-gray-600">
                  نحن في المسار الرقمي المميز للخدمات العقارية نفتخر بحصولنا على
                  جميع التراخيص والاعتمادات الرسمية من الجهات المختصة في المملكة
                  العربية السعودية، مما يضمن لعملائنا أعلى معايير الجودة
                  والمصداقية في تقديم الخدمات العقارية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center  animate-bounce-horizontal">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg mb-10">
              <span className="font-bold text-3xl">
                <span
                  className="font-bold
text-primary-800"
                >
                  اشتر
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  بيتك
                </span>
                <span
                  className="font-bold
text-primary-800 font-extrabold"
                >
                  0%
                </span>
                <span
                  className="font-bold
text-primary-800"
                >
                  عمولة
                </span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                المسار الرقمى المميز للخدمات العقارية
              </h3>
              <p className="text-gray-400 mb-6">
                نقدم خدمات عقارية متكاملة في المملكة العربية السعودية، بهدف
                تعزيز استثماراتك العقارية وزيادة فرص النجاح في سوق العقارات
                التنافسي.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    من نحن
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    المميزات
                  </a>
                </li>
                <li>
                  <a
                    href="#properties"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    العقارات المميزة
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    الخدمات
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    مشاريعنا
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">بيع وشراء العقارات</li>
                <li className="text-gray-400">تأجير العقارات</li>
                <li className="text-gray-400">إدارة العقارات</li>
                <li className="text-gray-400">تطوير الأراضي</li>
                <li className="text-gray-400">التقييم العقاري</li>
                <li className="text-gray-400">الوساطة العقارية</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">النشرة البريدية</h3>
              <p className="text-gray-400 mb-4">
                اشترك في نشرتنا البريدية للحصول على آخر الأخبار والعروض
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-l from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  اشتراك
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              جميع الحقوق محفوظة © 2025 المسار الرقمى المميز للخدمات العقارية
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProjectToReact;
