const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
  ];

  const indianCity = [
    "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool",
    "Rajahmundry", "Tirupati", "Kakinada", "Kadapa", "Anantapur",
    "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Madanapalle",
    "Machilipatnam", "Tenali", "Chittoor", "Hindupur", "Srikakulam",
    "Bhimavaram", "Tadepalligudem", "Guntakal", "Dharmavaram", "Gudivada",
    "Narasaraopet", "Kadiri", "Tadipatri", "Chirala", "Nagari",
    "Narasapuram", "Nellimarla", "Narsipatnam", "Nagireddipalle", "Nandyal",
    "Narasannapeta",  "Itanagar", "Naharlagun", "Pasighat", "Aalo", "Tezu", "Ziro",
    "Khonsa", "Bomdila", "Tawang", "Basar", "Roing", "Namsai",
    "Seppa", "Daporijo", "Yingkiong", "Changlang", "Miao", "Dirang",
    "Anini", "Koloriang", "Rupa", "Boleng", "Hawai", "Sagalee",
    "Yupia", "Doimukh", "Gumto", "Longding", "Pangin", "Likabali",
    "Bhalukpong", "Nampong", "Hayuliang", "Palin", "Jamin", "Mechukha", "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon",
    "Tinsukia", "Tezpur", "Bongaigaon", "Dhubri", "Diphu",
    "Sivasagar", "Karimganj", "Goalpara", "Barpeta", "Haflong",
    "North Lakhimpur", "Mangaldai", "Lanka", "Hojai", "Kokrajhar",
    "Nalbari", "Dhekiajuli", "Dergaon", "Sibsagar", "Chapar",
    "Mariani", "Marigaon", "Rangia", "Lumding", "Badarpur","Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga",
  "Ara", "Munger", "Purnia", "Chhapra", "Katihar",
  "Sasaram", "Saharsa", "Hajipur", "Dehri", "Motihari",
  "Nawada", "Bettiah", "Siwan", "Begusarai", "Sitamarhi",
  "Buxar", "Kishanganj", "Jamalpur", "Jehanabad", "Aurangabad",
  "Madhubani", "Samastipur", "Supaul", "Araria", "Bhabua",
    "Raipur", "Bhilai", "Bilaspur", "Korba", "Rajnandgaon",
    "Raigarh", "Jagdalpur", "Ambikapur", "Chirmiri", "Dhamtari",
    "Mahasamund", "Durg", "Kanker", "Kawardha", "Mungeli",
    "Bemetara", "Balod", "Janjgir", "Sakti", "Surajpur",
    "Balrampur", "Gariaband", "Baloda Bazar", "Sukma", "Bijapur",
    "Narayanpur", "Kondagaon", "Dantewada", "Patan", "Dongargarh", "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
    "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari",
    "Morbi", "Nadiad", "Bharuch", "Patan", "Porbandar",
    "Mehsana", "Bhuj", "Veraval", "Vapi", "Valsad",
    "Gandhidham", "Godhra", "Palanpur", "Himatnagar", "Kalol",
    "Botad", "Amreli", "Gondal", "Jetpur", "Deesa",  "Panaji", "Vasco da Gama", "Margao", "Mapusa", "Ponda",
    "Bicholim", "Canacona", "Cuncolim", "Curchorem", "Pernem",
    "Quepem", "Sanguem", "Sanquelim", "Valpoi",  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
    "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari",
    "Morbi", "Nadiad", "Bharuch", "Patan", "Porbandar",
    "Mehsana", "Bhuj", "Veraval", "Vapi", "Valsad",
    "Gandhidham", "Godhra", "Palanpur", "Himatnagar", "Kalol",
    "Botad", "Amreli", "Gondal", "Jetpur", "Deesa", "Chandigarh", "Faridabad", "Gurugram", "Panipat", "Ambala",
    "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat",
    "Panchkula", "Bhiwani", "Bahadurgarh", "Sirsa", "Jind",
    "Thanesar", "Kaithal", "Rewari", "Mahendragarh", "Palwal",
    "Fatehabad", "Gohana", "Narwana", "Ratia", "Hansi",
    "Tohana", "Narnaul", "Charkhi Dadri", "Pehowa", "Shimla", "Mandi", "Kullu", "Manali", "Dharamshala",
    "Solan", "Palampur", "Bilaspur", "Chamba", "Hamirpur",
    "Kangra", "Nahan", "Una", "Kinnaur", "Keylong",
    "Sundernagar", "Nalagarh", "Paonta Sahib", "Reckong Peo", "Rampur",  "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Hazaribagh",
    "Deoghar", "Giridih", "Ramgarh", "Dumka", "Chaibasa",
    "Palamu", "Gumla", "Lohardaga", "Jamtara", "Sahibganj",
    "Medininagar", "Simdega", "Godda", "Chatra", "Koderma",  "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Hazaribagh",
    "Deoghar", "Giridih", "Ramgarh", "Dumka", "Chaibasa",
    "Palamu", "Gumla", "Lohardaga", "Jamtara", "Sahibganj",
    "Medininagar", "Simdega", "Godda", "Chatra", "Koderma",  "Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam",
    "Kannur", "Alappuzha", "Palakkad", "Malappuram", "Kottayam",
    "Pathanamthitta", "Idukki", "Kasaragod", "Varkala", "Munnar",
    "Ponnani", "Neyyattinkara", "Thalassery", "Kanhangad", "Perumbavoor", "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain",
    "Sagar", "Ratlam", "Rewa", "Satna", "Dewas",
    "Chhindwara", "Shivpuri", "Vidisha", "Damoh", "Sehore",
    "Morena", "Khandwa", "Bhind", "Hoshangabad", "Mandsaur",
    "Betul", "Itarsi", "Neemuch", "Seoni", "Khargone",  "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
    "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli",
    "Jalgaon", "Navi Mumbai", "Akola", "Latur", "Dhule",
    "Ahmednagar", "Chandrapur", "Parbhani", "Jalna", "Bhusawal",
    "Ratnagiri", "Wardha", "Yavatmal", "Satara", "Beed",  "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
    "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli",
    "Jalgaon", "Navi Mumbai", "Akola", "Latur", "Dhule",
    "Ahmednagar", "Chandrapur", "Parbhani", "Jalna", "Bhusawal",
    "Ratnagiri", "Wardha", "Yavatmal", "Satara", "Beed", "Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara",
  "Resubelpara", "Williamnagar", "Mawkyrwat", "Khliehriat", "Ampati","Aizawl", "Lunglei", "Saiha", "Champhai", "Serchhip",
  "Kolasib", "Lawngtlai", "Mamit", "Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha",
  "Mon", "Zunheboto", "Phek", "Kiphire", "Longleng", "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur",
  "Puri", "Balasore", "Bhadrak", "Baripada", "Jeypore",
  "Bolangir", "Angul", "Dhenkanal", "Jharsuguda", "Rayagada",
  "Koraput", "Phulbani", "Paradip", "Sundargarh", "Keonjhar",  "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda",
  "Mohali", "Hoshiarpur", "Pathankot", "Moga", "Ferozepur",
  "Sangrur", "Kapurthala", "Barnala", "Gurdaspur", "Muktsar",
  "Faridkot", "Nawanshahr", "Malerkotla", "Fazilka", "Tarn Taran", "Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner",
  "Ajmer", "Alwar", "Bharatpur", "Sikar", "Pali",
  "Sri Ganganagar", "Bhilwara", "Hanumangarh", "Chittorgarh", "Beawar",
  "Tonk", "Nagaur", "Barmer", "Jaisalmer", "Dungarpur","Gangtok", "Namchi", "Gyalshing", "Mangan", "Jorethang",
  "Singtam", "Rangpo", "Ravangla", "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
  "Erode", "Tirunelveli", "Vellore", "Thoothukudi", "Dindigul",
  "Thanjavur", "Cuddalore", "Kanchipuram", "Karur", "Nagapattinam",
  "Nagercoil", "Tiruvannamalai", "Kumbakonam", "Hosur", "Dharmapuri",  "Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar",
  "Ramagundam", "Mahbubnagar", "Adilabad", "Suryapet", "Miryalaguda",
  "Nalgonda", "Jagtial", "Siddipet", "Mancherial", "Kothagudem",
  "Zaheerabad", "Bodhan", "Medak", "Wanaparthy", "Gadwal", "Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Belonia",
  "Ambassa", "Khowai", "Bishalgarh", "Teliamura", "Sabroom","Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut",
  "Prayagraj", "Ghaziabad", "Noida", "Aligarh", "Moradabad",
  "Bareilly", "Saharanpur", "Gorakhpur", "Jhansi", "Firozabad",
  "Mathura", "Rampur", "Shahjahanpur", "Muzaffarnagar", "Ayodhya (",
  "Mirzapur", "Banda", "Etawah", "Farrukhabad", "Sitapur",  "Dehradun", "Haridwar", "Rishikesh", "Roorkee", "Haldwani",
  "Nainital", "Almora", "Pithoragarh", "Kashipur", "Rudrapur",
  "Mussoorie", "Chamoli", "Bageshwar", "Tehri", "Uttarkashi",  "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri",
  "Bardhaman", "Malda", "Kharagpur", "Baharampur", "Haldia",
  "Jalpaiguri", "Balurghat", "Krishnanagar", "Cooch Behar", "Bankura",
  "Darjeeling", "Midnapore", "Raiganj", "Purulia", "Serampore",  "Port Blair", "Car Nicobar", "Mayabunder", "Diglipur", "Hut Bay",
  "Rangat", "Kamorta", "Campbell Bay","Chandigarh", "Silvassa", "Daman", "Diu", "Amli", "Naroli", "Samarvarni", "Kavaratti", "Agatti", "Amini", "Andrott", "Kadmat",
  "Kalpeni", "Minicoy", "Chetlat", "Bitra", "Kiltan", "New Delhi", "Old Delhi", "Dwarka", "Rohini", "Karol Bagh",
  "Saket", "Laxmi Nagar", "Pitampura", "Vasant Kunj", "Mayur Vihar","Puducherry", "Karaikal", "Mahe", "Yanam","Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur",
  "Kathua", "Pulwama", "Poonch", "Rajouri", "Budgam",
  "Ganderbal", "Kupwara", "Kulgam", "Doda", "Reasi", "Leh", "Kargil", "Diskit", "Dras", "Nubra Valley",
  "Padum", "Turtuk"
  ];