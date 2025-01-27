// Show login modal
const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

loginButton.addEventListener('click', () => {
  loginModal.classList.remove('hidden'); // Show the login modal
});

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "admin@example.com" && password === "admin123") {
    // Close the login modal and load main page
    loginModal.classList.add('hidden');
    loadMainPage();
  } else {
    alert('Invalid email or password.');
  }
});

// Load Main Page after login
function loadMainPage() {
  document.body.innerHTML = `
    <nav class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Pinjamify</h1>
      <ul class="flex space-x-6">
        <li><a href="index.html" class="hover:text-gray-200">Dashboard</a></li>
        <li><a href="profile.html" class="hover:text-gray-200">FAQ</a></li>
        <li><button id="logoutButton" class="hover:text-gray-200">Logout</button></li>
      </ul>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow container mx-auto py-12">
    <h2 class="text-3xl font-bold text-center text-gray-700 mb-8">Butuh Dana Cepat? Pahamify Solusinya</h2>
    
    <!-- Simpan Dana & Pinjam Dana -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Simpan Dana -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-700 mb-4">Simpan Dana</h3>
        <form id="saveForm" class="space-y-4">
          <div>
            <label for="saveAmount" class="block text-sm font-medium text-gray-600">Jumlah Dana</label>
            <input 
              type="number" 
              id="saveAmount" 
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Masukkan jumlah dana yang ingin disimpan" 
              required 
            />
          </div>
          <div>
            <label for="saveMethod" class="block text-sm font-medium text-gray-600">Metode Pembayaran</label>
            <select 
              id="saveMethod" 
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="Virtual Account">Virtual Account</option>
              <option value="E-Wallet">E-Wallet</option>
            </select>
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Simpan Dana
          </button>
        </form>
      </div>
      
      <!-- Pinjam Dana -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-700 mb-4">Pinjam Dana</h3>
        <form id="loanForm" class="space-y-4">
          <div>
            <label for="loanAmount" class="block text-sm font-medium text-gray-600">Jumlah Pinjaman</label>
            <input 
              type="number" 
              id="loanAmount" 
              max="100000000" 
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Masukkan jumlah pinjaman (max: 100 juta)" 
              required 
            />
          </div>
          <div>
            <label for="loanDuration" class="block text-sm font-medium text-gray-600">Tempo Pembayaran</label>
            <select 
              id="loanDuration" 
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="5">5 Bulan</option>
              <option value="12">12 Bulan</option>
              <option value="24">24 Bulan</option>
            </select>
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Pinjam Dana
          </button>
        </form>
      </div>

    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-6">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 Pinjamify by Raihanologi. All Rights Reserved.</p>
    </div>
  </footer>
  `;

  // Add logout functionality
  document.getElementById('logoutButton').addEventListener('click', () => {
    alert('Anda telah logout.');
    window.location.reload();
  });

  // Simpan Dana functionality
  document.getElementById('saveForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const saveAmount = document.getElementById('saveAmount').value;
    const saveMethod = document.getElementById('saveMethod').value;
    alert(`Dana Rp${parseInt(saveAmount).toLocaleString()} berhasil disimpan dengan metode ${saveMethod}.`);
  });

  // Pinjam Dana functionality
  document.getElementById('loanForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const loanAmount = document.getElementById('loanAmount').value;
    const loanDuration = document.getElementById('loanDuration').value;
    if (loanAmount > 100000000) {
      alert('Jumlah pinjaman tidak boleh melebihi Rp100 juta.');
    } else {
      alert(`Dana Rp${parseInt(loanAmount).toLocaleString()} berhasil dipinjam untuk ${loanDuration} bulan.`);
    }
  });
}
