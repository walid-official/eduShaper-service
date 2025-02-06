Here’s the **well-formatted** README section with **dependencies**, ready to copy and paste into your `README.md` file:  

```markdown
# 🎓 EduSphere Service  

EduSphere Service is an innovative platform designed to connect users with diverse educational services. From sharing and booking tutoring sessions to managing educational resources, **EduSphere Service** empowers both learners and providers with an **easy-to-use, efficient, and secure web application** tailored to meet modern educational needs.  

---

## 📸 Screenshot  
<img src="https://raw.githubusercontent.com/walid-official/eduShaper-service/main/Screenshot-2025-01-04-192322.png" alt="EduShaper Screenshot" width="600">

---

## 🔗 Client Site URL  
🌍 **[Live Demo](https://education-service-d2fdb.web.app)**  

---

## 📂 Category  
📌 **Assignment_Category_02**  

---

## 🚀 Key Features  

### 🧭 Dynamic Navigation  
✅ **Conditional navbar rendering** based on user authentication status  
✅ **Navigation options:** Home, Services, Dashboard, Logout  

### 🏠 Interactive Home Page  
✅ **Beautiful banner/slider** for a welcoming experience  
✅ **Featured services section** to highlight top educational offerings  
✅ **Animations for enhanced engagement** using AOS or Framer Motion  

### 📚 All Services Page  
✅ Displays **all educational services** with a clean grid layout  
✅ **Search functionality** to find services quickly  
✅ **"View Details" button** for each service  

### 📖 Service Details  
✅ **Detailed view** of a specific service with full description  
✅ **Booking options** via a modal or dedicated booking form  

### 🛠️ Service Management  
✅ **Logged-in users** can **add, update, and delete** their own services  
✅ **Real-time updates** on service modifications  

### 📅 Booking Management  
✅ Users can **view and manage booked services**  
✅ **Check service status and details** in one place  

### ✅ Service-To-Do Page  
✅ Displays **services booked by others**  
✅ **Service providers can update statuses dynamically**  
   - Pending  
   - Working  
   - Completed  

### 🎨 Responsive UI/UX  
✅ **Mobile-first design** for seamless experience on all devices  
✅ **Smooth animations** using AOS or Framer Motion  

---

## 🔧 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/eduSphere-service.git
cd eduSphere-service
```

### **2️⃣ Install Dependencies**  
Run the following command to install required packages:  
```sh
npm install
```

---

## 📦 Dependencies  

This project uses the following dependencies:  

| Package                      | Version   | Description |
|------------------------------|-----------|-------------|
| `@emailjs/browser`           | ^4.4.1    | Send emails directly from client-side |
| `aos`                        | ^2.3.4    | Animate on scroll for smooth animations |
| `axios`                      | ^1.7.9    | HTTP client for API requests |
| `clsx`                       | ^2.1.1    | Utility for conditionally joining class names |
| `date-fns`                   | ^4.1.0    | JavaScript date utility library |
| `firebase`                   | ^11.1.0   | Firebase SDK for authentication and database |
| `framer-motion`              | ^11.15.0  | Animation library for React |
| `localforage`                | ^1.10.0   | Offline storage support |
| `lottie-react`               | ^2.4.0    | Lottie animations for React |
| `match-sorter`               | ^8.0.0    | Utility for sorting and filtering data |
| `moment`                     | ^2.30.1   | Date and time library |
| `moment-timezone`            | ^0.5.46   | Timezone support for Moment.js |
| `motion`                     | ^11.15.0  | Advanced motion handling in React |
| `react`                      | ^18.3.1   | JavaScript library for UI development |
| `react-countup`              | ^6.5.3    | Animated number counter component |
| `react-datepicker`           | ^7.5.0    | Date picker component for forms |
| `react-dom`                  | ^18.3.1   | React library for rendering DOM elements |
| `react-hook-form`            | ^7.54.2   | Form validation and management |
| `react-hot-toast`            | ^2.4.1    | Notifications for React |
| `react-icons`                | ^5.4.0    | Icons library for React |
| `react-moment`               | ^1.1.3    | React wrapper for Moment.js |
| `react-router-dom`           | ^7.1.0    | Routing for React applications |
| `react-scroll-trigger`       | ^0.6.14   | Trigger animations based on scroll position |
| `sort-by`                    | ^1.2.0    | Sorting utility for arrays |
| `sweetalert2`                | ^11.15.3  | Beautiful alert pop-ups |
| `swiper`                     | ^11.1.15  | Modern touch slider component |
| `tailwind-merge`             | ^2.6.0    | Utility to merge Tailwind CSS classes |

To install all dependencies manually, run:  
```sh
npm install @emailjs/browser aos axios clsx date-fns firebase framer-motion localforage lottie-react match-sorter moment moment-timezone motion react react-countup react-datepicker react-dom react-hook-form react-hot-toast react-icons react-moment react-router-dom react-scroll-trigger sort-by sweetalert2 swiper tailwind-merge
```

---

## 🚀 Running the Project  

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add your API keys:  

```sh
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Backend API URL
VITE_BACKEND_URL=http://localhost:5000
```

> **Note:** Replace `your_firebase_api_key`, `your_firebase_project_id`, etc., with actual values from your Firebase console.  

---

### **4️⃣ Start the Development Server**  
```sh
npm run dev
```
> The app should now be running at **http://localhost:5173/**  

---

## 🔥 Troubleshooting  
If you run into issues:  
- **Check logs for errors** using `npm run dev`  
- **Ensure all environment variables are correctly set**  
- **Restart the server** if necessary  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## ✨ Contributors  
👤 **Your Name** – [GitHub](https://github.com/your-username)  

---

### 🎉 Now you're ready to explore **EduSphere Service**! 🚀  
```

