const indianLocations = {
        'Andhra Pradesh (AP)': [
            'Adilabad',
            'Anantapur',
            'Chittoor',
            'Kakinada',
            'Guntur',
            'Hyderabad',
            'Karimnagar',
            'Khammam',
            'Krishna',
            'Kurnool',
            'Mahbubnagar',
            'Medak',
            'Nalgonda',
            'Nizamabad',
            'Ongole',
            'Hyderabad',
            'Srikakulam',
            'Nellore',
            'Visakhapatnam',
            'Vizianagaram',
            'Warangal',
            'Eluru',
            'Kadapa',
        ],
        'Arunachal Pradesh (AR)': [
            'Anjaw',
            'Changlang',
            'East Siang',
            'Kurung Kumey',
            'Lohit',
            'Lower Dibang Valley',
            'Lower Subansiri',
            'Papum Pare',
            'Tawang',
            'Tirap',
            'Dibang Valley',
            'Upper Siang',
            'Upper Subansiri',
            'West Kameng',
            'West Siang',
        ],
        'Assam (AS)': [
            'Baksa',
            'Barpeta',
            'Bongaigaon',
            'Cachar',
            'Chirang',
            'Darrang',
            'Dhemaji',
            'Dima Hasao',
            'Dhubri',
            'Dibrugarh',
            'Goalpara',
            'Golaghat',
            'Hailakandi',
            'Jorhat',
            'Kamrup',
            'Kamrup Metropolitan',
            'Karbi Anglong',
            'Karimganj',
            'Kokrajhar',
            'Lakhimpur',
            'Marigaon',
            'Nagaon',
            'Nalbari',
            'Sibsagar',
            'Sonitpur',
            'Tinsukia',
            'Udalguri',
        ],
        'Bihar (BR)': [
            'Araria',
            'Arwal',
            'Aurangabad',
            'Banka',
            'Begusarai',
            'Bhagalpur',
            'Bhojpur',
            'Buxar',
            'Darbhanga',
            'East Champaran',
            'Gaya',
            'Gopalganj',
            'Jamui',
            'Jehanabad',
            'Kaimur',
            'Katihar',
            'Khagaria',
            'Kishanganj',
            'Lakhisarai',
            'Madhepura',
            'Madhubani',
            'Munger',
            'Muzaffarpur',
            'Nalanda',
            'Nawada',
            'Patna',
            'Purnia',
            'Rohtas',
            'Saharsa',
            'Samastipur',
            'Saran',
            'Sheikhpura',
            'Sheohar',
            'Sitamarhi',
            'Siwan',
            'Supaul',
            'Vaishali',
            'West Champaran',
            'Chandigarh',
        ],
        'Chhattisgarh (CG)': [
            'Bastar',
            'Bijapur',
            'Bilaspur',
            'Dantewada',
            'Dhamtari',
            'Durg',
            'Jashpur',
            'Janjgir-Champa',
            'Korba',
            'Koriya',
            'Kanker',
            'Kabirdham (Kawardha)',
            'Mahasamund',
            'Narayanpur',
            'Raigarh',
            'Rajnandgaon',
            'Raipur',
            'Surguja',
        ],
        'Dadra and Nagar Haveli (DN)': [
            'Dadra and Nagar Haveli',
        ],
        'Daman and Diu (DD)': [
            'Daman',
            'Diu',
        ],
        'Dehli (DL)': [
            'Central Dehli',
            'East Dehli',
            'New Dehli',
            'North Dehli',
            'North East Dehli',
            'North West Dehli',
            'South Dehli',
            'South West Dehli',
            'West Dehli',
        ],
        'Goa (GA)': [
            'North Goa',
            'South Goa',
        ],
        'Gujarat (GJ)': [
            'Ahmedabad',
            'Amreli district',
            'Anand',
            'Banaskantha',
            'Bharuch',
            'Bhavnagar',
            'Dahod',
            'The Dangs',
            'Gandhinagar',
            'Jamnagar',
            'Junagadh',
            'Kutch',
            'Kheda',
            'Mehsana',
            'Narmada',
            'Navsari',
            'Patan',
            'Panchmahal',
            'Porbandar',
            'Rajkot',
            'Sabarkantha',
            'Surendranagar',
            'Surat',
            'Vyara',
            'Vadodara',
            'Valsad',
        ],
        'Haryana (HR)': [
            'Ambala',
            'Bhiwani',
            'Faridabad',
            'Fatehabad',
            'Gurgaon',
            'Hissar',
            'Jhajjar',
            'Jind',
            'Karnal',
            'Kaithal',
            'Kurukshetra',
            'Mahendragarh',
            'Mewat',
            'Palwal',
            'Panchkula',
            'Panipat',
            'Rewari',
            'Rohtak',
            'Sirsa',
            'Sonipat',
            'Yamuna Nagar',
        ],
        'Himachal Pradesh (HP)': [
            'Bilaspur',
            'Chamba',
            'Hamirpur',
            'Kangra',
            'Kinnaur',
            'Kullu',
            'Lahaul and Spiti',
            'Mandi',
            'Shimla',
            'Sirmaur',
            'Solan',
            'Una',
        ],
        'Jammu and Kashmir (JK)': [
            'Anantnag',
            'Badgam',
            'Bandipora',
            'Baramulla',
            'Doda',
            'Ganderbal',
            'Jammu',
            'Kargil',
            'Kathua',
            'Kishtwar',
            'Kupwara',
            'Kulgam',
            'Leh',
            'Poonch',
            'Pulwama',
            'Rajauri',
            'Ramban',
            'Reasi',
            'Samba',
            'Shopian',
            'Srinagar',
            'Udhampur',
        ],
        'Jharkhand (JH)': [
            'Bokaro',
            'Chatra',
            'Deoghar',
            'Dhanbad',
            'Dumka',
            'East Singhbhum',
            'Garhwa',
            'Giridih',
            'Godda',
            'Gumla',
            'Hazaribag',
            'Jamtara',
            'Khunti',
            'Koderma',
            'Latehar',
            'Lohardaga',
            'Pakur',
            'Palamu',
            'Ramgarh',
            'Ranchi',
            'Sahibganj',
            'Seraikela Kharsawan',
            'Simdega',
            'West Singhbhum',
        ],
        'Karnataka (KA)': [
            'Bagalkot',
            'Bangalore Rural',
            'Bangalore Urban',
            'Belgaum',
            'Bellary',
            'Bidar',
            'Chamarajnagar',
            'Chikkamagaluru',
            'Chikkaballapur',
            'Chitradurga',
            'Davanagere',
            'Dharwad',
            'Dakshina Kannada',
            'Gadag',
            'Gulbarga',
            'Hassan',
            'Haveri district',
            'Kodagu',
            'Kolar',
            'Koppal',
            'Mandya',
            'Mysore',
            'Raichur',
            'Shimoga',
            'Tumkur',
            'Udupi',
            'Uttara Kannada',
            'Ramanagara',
            'Yadgir',
        ],
        'Kerala (KL)': [
            'Alappuzha',
            'Ernakulam',
            'Idukki',
            'Kannur',
            'Kasaragod',
            'Kollam',
            'Kottayam',
            'Kozhikode',
            'Malappuram',
            'Palakkad',
            'Pathanamthitta',
            'Thrissur',
            'Thiruvananthapuram',
            'Wayanad',
        ],
        'Madhya Pradesh (MP)': [
            'Alirajpur',
            'Anuppur',
            'Ashok Nagar',
            'Balaghat',
            'Barwani',
            'Betul',
            'Bhind',
            'Bhopal',
            'Burhanpur',
            'Chhatarpur',
            'Chhindwara',
            'Damoh',
            'Datia',
            'Dewas',
            'Dhar',
            'Dindori',
            'Guna',
            'Gwalior',
            'Harda',
            'Hoshangabad',
            'Indore',
            'Jabalpur',
            'Jhabua',
            'Katni',
            'Khandwa (East Nimar)',
            'Khargone (West Nimar)',
            'Mandla',
            'Mandsaur',
            'Morena',
            'Narsinghpur',
            'Neemuch',
            'Panna',
            'Rewa',
            'Rajgarh',
            'Ratlam',
            'Raisen',
            'Sagar',
            'Satna',
            'Sehore',
            'Seoni',
            'Shahdol',
            'Shajapur',
            'Sheopur',
            'Shivpuri',
            'Sidhi',
            'Singrauli',
            'Tikamgarh',
            'Ujjain',
            'Umaria',
            'Vidisha',
        ],
        'Maharashtra (MH)': [
            'Ahmednagar',
            'Akola',
            'Amravati',
            'Aurangabad',
            'Bhandara',
            'Beed',
            'Buldhana',
            'Chandrapur',
            'Dhule',
            'Gadchiroli',
            'Gondia',
            'Hingoli',
            'Jalgaon',
            'Jalna',
            'Kolhapur',
            'Latur',
            'Mumbai City',
            'Mumbai suburban',
            'Nandurbar',
            'Nanded',
            'Nagpur',
            'Nashik',
            'Osmanabad',
            'Parbhani',
            'Pune',
            'Raigad',
            'Ratnagiri',
            'Sindhudurg',
            'Sangli',
            'Solapur',
            'Satara',
            'Thane',
            'Wardha',
            'Washim',
            'Yavatmal',
        ],
        'Manipur (MN)': [
            'Bishnupur',
            'Churachandpur',
            'Chandel',
            'Imphal East',
            'Senapati',
            'Tamenglong',
            'Thoubal',
            'Ukhrul',
            'Imphal West',
        ],
        'Meghalaya (ML)': [
            'East Garo Hills',
            'East Khasi Hills',
            'Jaintia Hills',
            'Ri Bhoi',
            'South Garo Hills',
            'West Garo Hills',
            'West Khasi Hills',
        ],
        'Mizoram (MZ)': [
            'Aizawl',
            'Champhai',
            'Kolasib',
            'Lawngtlai',
            'Lunglei',
            'Mamit',
            'Saiha',
            'Serchhip',
        ],
        'Nagaland (NL)': [
            'Dimapur',
            'Kohima',
            'Mokokchung',
            'Mon',
            'Phek',
            'Tuensang',
            'Wokha',
            'Zunheboto',
        ],
        'Orissa (OR)': [
            'Angul',
            'Boudh (Bauda)',
            'Bhadrak',
            'Balenore',
            'Bolangir',
            'Bargarh (Baragarh)',
            'Baleshwar (Balasore)',
            'Cuttack',
            'Debagarh (Deogarh)',
            'Dhenkanal',
            'Ganjam',
            'Gajapati',
            'Jharsuguda',
            'Jajpur',
            'Jagatsinghpur',
            'Khordha',
            'Kendujhar (Keonjhar)',
            'Kalahandi',
            'Kandhamal',
            'Koraput',
            'Kendrapara',
            'Malkangiri',
            'Mayurbhanj',
            'Nabarangpur',
            'Nuapada',
            'Nayagarh',
            'Puri',
            'Rayagada',
            'Sambalpur',
            'Subarnapur (Sonepur)',
            'Sundargarh',
        ],
        'Puducherry (PY)': [
            'Karaikal',
            'Mahe',
            'Pondicherry',
            'Yanam',
        ],
        'Punjab (PB)': [
            'Amritsar',
            'Barnala',
            'Bathinda',
            'Firozpur',
            'Faridkot',
            'Fatehgarh Sahib',
            'Fazilka',
            'Gurdaspur',
            'Hoshiarpur',
            'Jalandhar',
            'Kapurthala',
            'Ludhiana',
            'Mansa',
            'Moga',
            'Sri Muktsar Sahib',
            'Pathankot',
            'Patiala',
            'Rupnagar',
            'Ajitgarh (Mohali)',
            'Sangrur',
            'Nawanshahr',
            'Tarn Taran',
        ],
        'Rajasthan (RJ)': [
            'Ajmer',
            'Alwar',
            'Bikaner',
            'Barmer',
            'Banswara',
            'Bharatpur',
            'Baran',
            'Bundi',
            'Bhilwara',
            'Churu',
            'Chittorgarh',
            'Dausa',
            'Dholpur',
            'Dungapur',
            'Ganganagar',
            'Hanumangarh',
            'Jhunjhunu',
            'Jalore',
            'Jodhpur',
            'Jaipur',
            'Jaisalmer',
            'Jhalawar',
            'Karauli',
            'Kota',
            'Nagaur',
            'Pali',
            'Pratapgarh',
            'Rajsamand',
            'Sikar',
            'Sawai Madhopur',
            'Sirohi',
            'Tonk',
            'Udaipur',
        ],
        'Sikkim (SK)': [
            'East Sikkim',
            'North Sikkim',
            'South Sikkim',
            'West Sikkim',
        ],
        'Tamil Nadu (TN)': [
            'Ariyalur',
            'Chennai',
            'Coimbatore',
            'Cuddalore',
            'Dharmapuri',
            'Dindigul',
            'Erode',
            'Kanchipuram',
            'Kanyakumari',
            'Karur',
            'Madurai',
            'Nagapattinam',
            'Nilgiris',
            'Namakkal',
            'Perambalur',
            'Pudukkottai',
            'Ramanathapuram',
            'Salem',
            'Sivaganga',
            'Tirupur',
            'Tiruchirappalli',
            'Theni',
            'Tirunelveli',
            'Thanjavur',
            'Thoothukudi',
            'Tiruvallur',
            'Tiruvarur',
            'Tiruvannamalai',
            'Vellore',
            'Viluppuram',
            'Virudhunagar',
        ],
        'Telangana (TS)': [
            'Adilabad',
            'Bhadradri Kothagudem',
            'Hyderabad',
            'Jagtial',
            'Jangaon',
            'Jayashankar Bhoopalpally',
            'Jogulamba Gadwal',
            'Kamareddy',
            'Karimnagar',
            'Khammam',
            'Komaram Bheem Asifabad',
            'Mahabubabad',
            'Mahbubnagar',
            'Mancherial',
            'Medak',
            'Medchal',
            'Nagarkurnool',
            'Nalgonda',
            'Nirmal',
            'Nizamabad',
            'Peddapalli',
            'Rajanna Sircilla',
            'Rangareddy',
            'Sangareddy',
            'Siddipet',
            'Suryapet',
            'Vikarabad',
            'Wanaparthy',
            'Warangal (Rural)',
            'Warangal (Urban)',
            'Yadadri Bhuvanagiri',
        ],
        'Tripura (TR)': [
            'Dhalai',
            'Gomati',
            'Khowai',
            'North Tripura',
            'Sepahijala',
            'South Tripura',
            'Unakoti',
            'West Tripura',
        ],
        'Uttar Pradesh (UP)': [
            'Agra',
            'Aligarh',
            'Allahabad',
            'Ambedkar Nagar',
            'Auraiya',
            'Azamgarh',
            'Barabanki',
            'Budaun',
            'Bagpat',
            'Bahraich',
            'Bijnor',
            'Ballia',
            'Banda',
            'Balrampur',
            'Bareilly',
            'Basti',
            'Bulandshahr',
            'Chandauli',
            'Chhatrapati Shahuji Maharaj Nagar',
            'Chitrakoot',
            'Deoria',
            'Etah',
            'Kanshi Ram Nagar',
            'Etawah',
            'Firozabad',
            'Farrukhabad',
            'Fatehpur',
            'Faizabad',
            'Gautam Buddh Nagar',
            'Gonda',
            'Ghazipur',
            'Gorakhpur',
            'Ghaziabad',
            'Hamirpur',
            'Hardoi',
            'Mahamaya Nagar',
            'Jhansi',
            'Jalaun',
            'Jyotiba Phule Nagar',
            'Jaunpur district',
            'Ramabai Nagar (Kanpur Dehat)',
            'Kannauj',
            'Kanpur',
            'Kaushambi',
            'Kushinagar',
            'Lalitpur',
            'Lakhimpur Kheri',
            'Lucknow',
            'Mau',
            'Meerut',
            'Maharajganj',
            'Mahoba',
            'Mirzapur',
            'Moradabad',
            'Mainpuri',
            'Mathura',
            'Muzaffarnagar',
            'Panchsheel Nagar district (Hapur)',
            'Pilibhit',
            'Shamli',
            'Pratapgarh',
            'Rampur',
            'Raebareli',
            'Saharanpur',
            'Sitapur',
            'Shahjahanpur',
            'Sant Kabir Nagar',
            'Siddharthnagar',
            'Sonbhadra',
            'Sant Ravidas Nagar',
            'Sultanpur',
            'Shravasti',
            'Unnao',
            'Varanasi',
        ],
        'Uttarakhand (UK)': [
            'Almora',
            'Bageshwar',
            'Chamoli',
            'Champawat',
            'Dehradun',
            'Haridwar',
            'Nainital',
            'Pauri Garhwal',
            'Pithoragarh',
            'Rudraprayag',
            'Tehri Garhwal',
            'Udham Singh Nagar',
            'Uttarkashi',
        ],
        'West Bengal (WB)': [
            'Kolkata',
            'Bankura',
            'Bardhaman',
            'Birbhum',
            'Cooch Behar',
            'Dakshin Dinajpur',
            'Darjeeling',
            'Hooghly',
            'Howrah',
            'Jalpaiguri',
            'Kalimpong',
            'Kolkata',
            'Malda',
            'Murshidabad',
            'Nadia',
            'North 24 Parganas',
            'Paschim Medinipur',
            'Purba Medinipur',
            'Purulia',
            'South 24 Parganas',
            'Uttar Dinajpur',
        ],
    };
    const stateCapitalMapping = {
        'Andhra Pradesh': 'Amaravati',
        'Arunachal Pradesh': 'Itanagar',
        'Assam': 'Dispur',
        'Bihar': 'Patna',
        'Chhattisgarh': 'Raipur',
        'Dehli': 'Dehli',
        'Goa': 'Panaji',
        'Gujarat': 'Gandhinagar',
        'Haryana': 'Chandigarh',
        'Himachal Pradesh': 'Shimla',
        'Jharkhand': 'Ranchi',
        'Karnataka': 'Bengaluru',
        'Kerala': 'Thiruvananthapuram',
        'Madhya Pradesh': 'Bhopal',
        'Maharashtra': 'Mumbai',
        'Manipur': 'Imphal',
        'Meghalaya': 'Shillong',
        'Mizoram': 'Aizawl',
        'Nagaland': 'Kohima',
        'Odisha': 'Bhubaneswar',
        'Punjab': 'Chandigarh',
        'Rajasthan': 'Jaipur',
        'Sikkim': 'Gangtok',
        'Tamil Nadu': 'Chennai',
        'Telangana': 'Hyderabad',
        'Tripura': 'Agartala',
        'Uttar Pradesh': 'Lucknow',
        'Uttarakhand': 'Dehradun',
        'West Bengal': 'Kolkata',
        'Jammu and Kashmir': 'Srinagar'
    };
    

    $(document).ready(function() {
        // Populate the dropdown with the locations from the array
        const selectElement = $('#loc');
        for (const state in indianLocations) {
            const cities = indianLocations[state];
            cities.forEach(city => {
                const option = $('<option>').text(`${city}, ${state}`);
                selectElement.append(option);
            });
        }
    
        // Initialize Chosen on the select element
        $('#loc').chosen();
    
        // Handle the form submission
        const searchForm = $('#weatherForm');
    searchForm.submit(function(event) {
        event.preventDefault();

        // Get the selected option from the dropdown
        const selectedOption = $('#loc').val();

        // Check if a valid option is selected
        if (selectedOption) {
            // Split the selected option into city and state
            const [cityState, capital] = selectedOption.split(', ');
            const [city, state] = cityState.split(', ');

            // Print the modified capital in the console
            const modifiedCapital = stateCapitalMapping[capital.slice(0, -5)];
            console.log('Capital:', modifiedCapital);

            // Send AJAX request to the PHP script
            $.ajax({
                type: 'POST',
                url: `https://indiaweather.000webhostapp.com/index.php`,
                data: { modifiedCapital: modifiedCapital, state:capital.slice(0, -5) },
                success: function(response) {
                    const responseObject = JSON.parse(response);
                    console.log('AJAX success:', responseObject.status);
                    
                    let temp = [];
                    let time = [];

                    // Convert time from "00:00:00" format to "12AM" format
                    function convertTo12HourFormat(time) {
                        const [hours, minutes, seconds] = time.split(':');
                        let period = 'AM';
                        
                        // Convert hours to 12-hour format
                        let hours12 = parseInt(hours);
                        if (hours12 >= 12) {
                            period = 'PM';
                            if (hours12 > 12) {
                                hours12 -= 12;
                            }
                        } else if (hours12 === 0) {
                            hours12 = 12; // Midnight
                        }

                        return `${hours12}:${period}`;
                    }

                    // Check if the response has "data" property
                    if (responseObject.data) {
                        // Loop through the "data" array in the response
                        document.querySelector('.vertical-line').style.display = 'block';
                        for (const entry of responseObject.data) {
                            // Extract temperature and time from each entry
                            if (entry.temp) {
                                temp.push(parseFloat(entry.temp));
                            }
                            if (entry.time) {
                                const formattedTime = convertTo12HourFormat(entry.time);
                                time.push(formattedTime);
                            }
                        }

                        // Log the extracted values
                        temp.reverse();
                        time.reverse();
                
                        // Create a graph using Chart.js
                        var options = {
                            chart: {
                                type: 'line',
                            },
                            series: [{
                                name: 'Temperature (°C)',
                                data: temp
                            }],
                            title: {
                                text: capital.slice(0, -5),
                                align: 'center'
                              },
                            xaxis: {
                                categories: time,
                                title: {
                                    text: 'Time'
                                }
                            },
                            stroke: {
                              
                                curve: 'smooth'
                              },
                            yaxis: {
                                title: {
                                    text: 'Temperature (°C)'
                                }
                            }
                        };
                          
                          var chart = new ApexCharts(document.querySelector("#chart"), options);
                          
                          chart.render();
                          
                    }
                },
                error: function(error) {
                    console.log('AJAX error:', error);
                }
            });
        }
    });
});
