document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const inputField = document.getElementById("inputField");
    const sendButton = document.getElementById("sendButton");

    // Updated responses object with 100 questions
    const responses = {
    "What is cybersecurity governance?": "Cybersecurity governance refers to the processes and policies used to protect an organization's information systems and data.",
    "What is cyberwarfare?": "Cyberwarfare refers to the use of digital attacks by one nation-state to disrupt the computer systems of another.",
    "How can I secure my mobile device?": "Use a strong password, enable fingerprint or face ID, install apps only from trusted sources, and keep your device updated.",
    "What is network segmentation?": "Network segmentation is the practice of dividing a computer network into smaller, isolated segments to reduce security risks.",
    "What is data breach?": "A data breach is an incident where sensitive, protected, or confidential data is accessed, disclosed, or stolen by unauthorized individuals.",
    "What is cyber forensics?": "Cyber forensics involves collecting, analyzing, and preserving digital evidence to investigate and prevent cybercrime.",
    "What is threat intelligence?": "Threat intelligence refers to the data collected, analyzed, and used to understand potential threats to an organization.",
    "What is ethical hacking?": "Ethical hacking is the practice of testing a system’s security by simulating attacks to identify vulnerabilities.",
    "What is a zero trust model?": "The zero trust model is a security framework that assumes no users or devices should be trusted by default, even if they are inside the network perimeter.",
    "What is GDPR?": "The General Data Protection Regulation (GDPR) is a regulation in EU law that governs data protection and privacy for individuals within the European Union.",
    "What is cyberstalking?": "Cyberstalking involves the use of the internet to harass or stalk an individual, often with the intent of intimidating or causing fear.",
    "What is the principle of least privilege?": "The principle of least privilege means giving users the minimum levels of access or permissions they need to perform their tasks.",
    "What is a cyber kill chain?": "A cyber kill chain is a model that describes the stages of a cyber attack, from reconnaissance to execution.",
    "What is a drive-by download?": "A drive-by download is an attack where malware is downloaded to a user’s device without their knowledge when they visit a compromised website.",
    "What is a backdoor in cybersecurity?": "A backdoor is a method of bypassing normal authentication in a system to gain unauthorized access.",
    "What is a data wipe?": "Data wiping is the process of completely erasing data from storage devices to prevent recovery of the information.",
    "What is a DNS attack?": "A DNS attack is when a hacker exploits vulnerabilities in the Domain Name System to redirect users to malicious websites or disrupt services.",
    "What is fileless malware?": "Fileless malware is a type of malicious software that doesn’t rely on files and is instead loaded directly into memory to evade detection.",
    "What is key management in cybersecurity?": "Key management refers to the process of generating, distributing, and storing cryptographic keys securely.",
    "What is cyber risk assessment?": "Cyber risk assessment evaluates the potential risks to an organization's information systems and data, helping them take preventive measures.",
    "What is a rootkit?": "A rootkit is a type of malware that gives hackers remote access and control of a computer without being detected by the user or security software.",
    "What is cryptojacking?": "Cryptojacking is the unauthorized use of someone's computer or device to mine cryptocurrency without their knowledge.",
    "What is cyber extortion?": "Cyber extortion occurs when cybercriminals demand payment from a victim by threatening to launch an attack or release stolen data.",
    "What is security orchestration?": "Security orchestration is the process of integrating and coordinating multiple security tools and systems to automate incident response and management.",
    "What is an access control list (ACL)?": "An ACL is a list of permissions attached to an object that specifies which users or system processes can access it and what operations they can perform.",
    "What is a software vulnerability?": "A software vulnerability is a flaw or weakness in a software application that could be exploited by attackers to perform unauthorized actions.",
    "What is insider fraud?": "Insider fraud is when an employee or trusted individual within an organization misuses their access to commit fraud or sabotage.",
    "What is digital forensics?": "Digital forensics is the practice of recovering and investigating material found in digital devices, often in relation to computer crime.",
    "What is an advanced persistent threat (APT)?": "An APT is a prolonged and targeted cyber attack in which an intruder gains access to a network and remains undetected for an extended period.",
    "What is an attack vector?": "An attack vector is a path or means by which a hacker can gain access to a computer or network to deliver a malicious payload or outcome.",
    "What is session hijacking?": "Session hijacking occurs when an attacker takes control of a user's session by stealing or guessing the session token.",
    "What is a logic bomb?": "A logic bomb is a piece of code intentionally inserted into a software system that will execute a malicious action when certain conditions are met.",
    "What is cybercrime?": "Cybercrime refers to any criminal activity that involves a computer, network, or internet-connected device.",
    "What is a rogue access point?": "A rogue access point is a wireless access point that has been installed on a network without authorization, often used for malicious purposes.",
    "What is risk mitigation in cybersecurity?": "Risk mitigation involves taking steps to reduce the severity, impact, or likelihood of a cybersecurity threat.",
    "What is cold boot attack?": "A cold boot attack is a type of attack where an attacker retrieves encryption keys from a computer’s memory after it has been rebooted.",
    "What is the CIA Triad?": "The CIA Triad is a model for guiding cybersecurity policies, focusing on Confidentiality, Integrity, and Availability.",
    "What is a cyber incident response plan?": "A cyber incident response plan is a set of instructions designed to help an organization respond to and recover from cybersecurity incidents.",
    "What is credential stuffing?": "Credential stuffing is an attack in which attackers use lists of compromised usernames and passwords to try and gain access to multiple accounts.",
    "What is social media phishing?": "Social media phishing is a type of phishing attack that occurs on social media platforms, often through fake messages or profiles.",
    "What is a session token?": "A session token is a unique identifier that is used to authenticate a user session and allow them to remain logged in to a website or application.",
    "What is mobile security?": "Mobile security refers to the measures taken to protect smartphones, tablets, and other mobile devices from cyber threats.",
    "What is cyber resilience?": "Cyber resilience refers to an organization's ability to withstand, recover from, and adapt to cyber attacks or security breaches.",
    "What is a vulnerability scan?": "A vulnerability scan is an automated process of identifying security vulnerabilities in a system, network, or application.",
    "What is a cyber threat actor?": "A cyber threat actor is an individual or group involved in malicious activities that target computer systems, networks, or information.",
    "What is an air gap in cybersecurity?": "An air gap is a security measure that isolates a computer or network from any other network, especially the internet, to prevent unauthorized access.",
    "What is a patch management process?": "Patch management is the process of identifying, acquiring, installing, and verifying patches (updates) for software to fix vulnerabilities.",
    "What is supply chain attack?": "A supply chain attack occurs when an attacker infiltrates a system through an outside partner or service provider with access to the target's data and systems.",
    "What is a web shell?": "A web shell is a malicious script that attackers upload to a web server to gain unauthorized access and execute arbitrary commands.",
    "What is biometric authentication?": "Biometric authentication uses unique biological traits such as fingerprints, face recognition, or iris scans to verify identity.",
    "What is file encryption?": "File encryption is the process of encoding files so that only authorized parties can access the information within them.",
    "What is phishing?": "Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.",
    "How to create a strong password?": "A strong password should be at least 12 characters long and include numbers, symbols, and both uppercase and lowercase letters.",
    "What is malware?": "Malware is any software intentionally designed to cause damage to a computer, server, client, or network.",
    "What is ransomware?": "Ransomware is a type of malware that locks users out of their systems and demands a ransom for restoring access.",
    "How to recognize a phishing email?": "Look for suspicious sender addresses, grammatical errors, and requests for sensitive information. Don't click on suspicious links.",
    "What is two-factor authentication (2FA)?": "2FA is an additional security layer that requires not only a password and username but also something only the user has on them, like a physical token or a mobile device.",
    "What is social engineering?": "Social engineering is the manipulation of people into performing actions or divulging confidential information.",
    "What is a firewall?": "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.",
    "How can I protect myself from malware?": "Use a reliable antivirus, avoid clicking suspicious links, and keep your software up to date.",
    "What is a VPN?": "A Virtual Private Network (VPN) allows users to send and receive data over shared or public networks as if their devices were directly connected to the private network.",
    "How do I know if my computer has been hacked?": "Signs include unusual activity, unknown programs, and slow performance. Monitor for strange pop-ups or sudden changes in settings.",
    "What is encryption?": "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access.",
    "What is the dark web?": "The dark web is a part of the internet that is intentionally hidden and only accessible with special software such as Tor. It is often used for illegal activities.",
    "What is a denial-of-service (DoS) attack?": "A DoS attack is an attack meant to shut down a machine or network, making it inaccessible to its intended users by overwhelming the system with traffic.",
    "What is a botnet?": "A botnet is a network of private computers infected with malicious software and controlled as a group without the owners' knowledge, often used to send spam or launch denial-of-service attacks.",
    "What is spyware?": "Spyware is a type of malware that collects personal information from your computer without your knowledge.",
    "What is identity theft?": "Identity theft occurs when someone steals your personal information to commit fraud or other crimes.",
    "What is the Internet of Things (IoT)?": "IoT refers to the network of physical objects, devices, vehicles, and appliances that can communicate and exchange data over the internet.",
    "What is brute force attack?": "A brute force attack is a trial-and-error method used to decode encrypted data such as passwords through exhaustive attempts.",
    "What is zero-day exploit?": "A zero-day exploit refers to a security flaw unknown to the software vendor, allowing attackers to exploit it before the vendor has a chance to fix it.",
    "What is a Trojan horse?": "A Trojan horse is a type of malware that disguises itself as legitimate software but performs malicious activities once installed.",
    "How can I protect my personal information online?": "Use strong passwords, enable two-factor authentication, be cautious of what you share on social media, and use secure websites (HTTPS).",
    "What is a SQL injection?": "SQL injection is a code injection technique used to attack data-driven applications by inserting malicious SQL statements into an entry field.",
    "What is a security patch?": "A security patch is an update released by software companies to fix vulnerabilities in their systems.",
    "What is spear phishing?": "Spear phishing is a targeted phishing attack where attackers customize their scam to a specific individual or organization.",
    "What is the difference between phishing and spear phishing?": "Phishing is a broad attack aimed at many individuals, while spear phishing targets specific individuals with tailored information.",
    "How do hackers use social media?": "Hackers use social media to gather personal information, spread malware, and launch targeted attacks.",
    "What is password manager?": "A password manager is a software tool that securely stores and manages your passwords in encrypted format.",
    "How to avoid ransomware attacks?": "Backup your data regularly, avoid clicking on suspicious links or attachments, and keep your software up to date.",
    "What is whaling attack?": "A whaling attack is a specific kind of phishing attack targeting high-profile individuals such as executives or senior employees.",
    "What is a digital signature?": "A digital signature is a cryptographic value that is used to authenticate the identity of the sender of a message or the signer of a document.",
    "What is a CAPTCHA?": "CAPTCHA stands for 'Completely Automated Public Turing test to tell Computers and Humans Apart' and is used to prevent bots from accessing websites.",
    "What is social media impersonation?": "Social media impersonation is when someone creates a fake account to impersonate a real individual for malicious purposes.",
    "What is spam?": "Spam is irrelevant or unsolicited messages sent over the internet, typically to a large number of users for advertising or phishing purposes.",
    "What is adware?": "Adware is a type of software that automatically displays or downloads advertising material when a user is online.",
    "What is cyberbullying?": "Cyberbullying is the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature.",
    "How do I secure my home Wi-Fi network?": "Use a strong password, enable WPA3 encryption, and change the default router settings.",
    "What is cloud security?": "Cloud security refers to the measures taken to protect data stored in cloud computing environments from unauthorized access or theft.",
    "What is a cybersecurity breach?": "A breach is an incident where sensitive, protected, or confidential data is accessed or disclosed in an unauthorized manner.",
    "What is penetration testing?": "Penetration testing is the process of simulating a cyber attack on a system to identify security vulnerabilities.",
    "What is cybersecurity hygiene?": "Cyber hygiene refers to the practices and steps that users and organizations take to maintain system health and improve online security.",
    "How to report a cybersecurity incident?": "You can report cybersecurity incidents to your organization's IT department, local law enforcement, or a national cybersecurity agency.",
    "What is an SSL certificate?": "An SSL certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection.",
    "What is a honeypot?": "A honeypot is a cybersecurity mechanism that uses a decoy system to attract attackers and analyze their behavior.",
    "How does antivirus software work?": "Antivirus software detects, prevents, and removes malware by scanning files and monitoring system activity.",
    "What is email spoofing?": "Email spoofing is when an email's sender address is forged to appear as if it comes from someone else, usually for phishing purposes.",
    "What is a keylogger?": "A keylogger is a type of spyware that records every keystroke made on a computer, often used to steal passwords and sensitive data.",
    "What is DDoS attack?": "A DDoS (Distributed Denial-of-Service) attack is when multiple systems flood the bandwidth or resources of a targeted system, typically one or more web servers.",
    "What is insider threat?": "An insider threat is a security risk that originates from within the organization, often from current or former employees with access to sensitive information.",
    "What is phishing link?": "A phishing link is a malicious URL designed to trick users into revealing personal information, often by pretending to be from a legitimate source.",
    "What is cyber insurance?": "Cyber insurance is a type of insurance designed to protect businesses and individuals from the financial consequences of cyber attacks.",
    "How can I avoid social engineering attacks?": "Be cautious of unsolicited communications, don't share sensitive information, and verify the identity of people before responding.",
    "What is a password policy?": "A password policy is a set of rules designed to improve computer security by encouraging users to create strong, complex passwords.",
    "What is cybersecurity awareness training?": "Cybersecurity awareness training teaches employees or users how to recognize and avoid cybersecurity threats, like phishing and malware.",
    "What is multifactor authentication (MFA)?": "MFA requires users to provide two or more verification factors to gain access to a system, such as a password and a security token."
    };

function sendMessage() {
        const userInput = inputField.value.trim();
        if (userInput === "") return;

        // Create user message element
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = userInput;
        chatbox.appendChild(userMessage);

        // Auto-scroll chatbox to the latest message
        chatbox.scrollTop = chatbox.scrollHeight;

        // Clear input field
        inputField.value = "";

        // Respond to user input
        setTimeout(function() {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");

            if (responses[userInput.toLowerCase()]) {
                botMessage.textContent = responses[userInput.toLowerCase()];
            } else {
                botMessage.textContent = "Sorry, I don't understand that.";
            }

            chatbox.appendChild(botMessage);
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 500); // Simulate delay
    }

    // Event listeners
    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
    
    
    
    
    
