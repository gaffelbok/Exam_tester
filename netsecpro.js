window.loadExamData([
    {
        text: "Which procedure is most effective for maintaining continuity and security during a Prisma Access data plane software upgrade?",
        options: [
            "Back up configurations, schedule upgrades during off-peak hours, and use a phased approach rather than attempting a network-wide rollout.",
            "Use Strata Cloud Manager (SCM) to perform dynamic upgrades automatically and simultaneously across all locations at once to ensure network-wide uniformity.",
            "Disable all security features during the upgrade to prevent conflicts and re-enable them after completion to ensure a smooth rollout process.",
            "Perform the upgrade during peak business hours, quickly address any user-reported issues, and ensure immediate troubleshooting post-rollout."
        ],
        correctIndexes: [0],
        explanation: "To minimize disruptions, it is recommended to perform Prisma Access upgrades during non-business hours and in a phased manner, starting with less critical sites to validate the process before moving to critical locations. Backup configurations and validate the system's readiness to avoid data loss and maintain service continuity."
    },
    {
        text: "An NGFW administrator is updating PAN-OS on company data center firewalls managed by Panorama. Prior to installing the update, what must the administrator verify to ensure the devices will continue to be supported by Panorama?",
        options: [
            "Device telemetry is enabled.",
            "Panorama is configured as the primary device in the log collecting group for the data center firewalls.",
            "All devices are in the same template stack.",
            "Panorama is running the same or newer PAN-OS release as the one being installed."
        ],
        correctIndexes: [3],
        explanation: "The firewall must be running a PAN-OS version that is supported by Panorama. This means that Panorama must be running the same or a newer PAN-OS version as the one being installed on the firewalls to maintain compatibility."
    },
    {
        text: "In which two applications can Prisma Access threat logs for mobile user traffic be reviewed? (Choose two.)",
        options: [
            "Prisma Cloud dashboard",
            "Strata Cloud Manager (SCM)",
            "Strata Logging Service",
            "Service connection firewall"
        ],
        correctIndexes: [1, 2],
        explanation: "Threat logs for Prisma Access mobile users can be reviewed in both Strata Cloud Manager (SCM) and Strata Logging Service. Prisma Access logs are available in the SCM and can also be sent to the Strata Logging Service for detailed analysis."
    },
    {
        text: "Which two tools can be used to configure Cloud NGFWs for AWS? (Choose two.)",
        options: [
            "Cortex XSIAM",
            "Prisma Cloud management console",
            "Panorama",
            "Cloud service provider's management console (AWS Console)"
        ],
        correctIndexes: [2, 3],
        explanation: "Cloud NGFW for AWS can be configured using Panorama for centralized security management, or directly through the AWS management console to deploy and manage security services for your AWS resources."
    },
    {
        text: "Using Prisma Access, which solution provides the most security coverage of network protocols for the mobile workforce?",
        options: [
            "Explicit proxy",
            "Client-based VPN",
            "Enterprise browser",
            "Clientless VPN"
        ],
        correctIndexes: [1],
        explanation: "Client-based VPN solutions like GlobalProtect provide full coverage for the mobile workforce by extending the enterprise security stack to remote endpoints. It establishes a secure tunnel covering all network protocols."
    },
    {
        text: "Which two prerequisites must be evaluated when decrypting internet-bound traffic? (Choose two.)",
        options: [
            "RADIUS profile",
            "Incomplete certificate chains",
            "Certificate pinning",
            "SAML certificate"
        ],
        correctIndexes: [1, 2],
        explanation: "When decrypting outbound SSL traffic, you must consider incomplete certificate chains, which can cause decryption to fail. Also, be aware of certificate pinning in applications that prevents decryption by rejecting forged certificates."
    },
    {
        text: "Which firewall attribute can an engineer use to simplify rule creation and automatically adapt to changes in server roles or security posture based on log events?",
        options: [
            "Address objects",
            "Dynamic Address Groups",
            "Dynamic User Groups",
            "Predefined IP addresses"
        ],
        correctIndexes: [1],
        explanation: "Dynamic Address Groups enable the firewall to automatically adjust security policies based on tags assigned dynamically (via log events, API, etc.). This eliminates the need for manual updates to policies when server roles or IPs change."
    },
    {
        text: "How does a firewall behave when SSL Inbound Inspection is enabled?",
        options: [
            "It acts transparently between the client and the internal server.",
            "It decrypts inbound and outbound SSH connections.",
            "It decrypts traffic between the client and the external server.",
            "It acts as meddler-in-the-middle between the client and the internal server."
        ],
        correctIndexes: [3],
        explanation: "SSL Inbound Inspection requires you to import the server's private key and certificate into the firewall. The firewall then acts as a man-in-the-middle (MITM) to decrypt inbound sessions from external clients to internal servers."
    },
    {
        text: "When a firewall acts as an application-level gateway (ALG), what does it require in order to establish a connection?",
        options: [
            "Dynamic IP and Port (DIPP)",
            "Payload",
            "Session Initiation Protocol (SIP)",
            "Pinholes"
        ],
        correctIndexes: [1],
        explanation: "An ALG is designed to inspect and modify the payload of application-layer protocols (like SIP, FTP, etc.) to manage dynamic port allocations and session information."
    },
    {
        text: "Which security profile provides real-time protection against threat actors who exploit the misconfigurations of DNS infrastructure and redirect traffic to malicious domains?",
        options: [
            "Antivirus",
            "URL Filtering",
            "Vulnerability Protection",
            "Anti-spyware"
        ],
        correctIndexes: [3],
        explanation: "The Anti-Spyware profile protects against DNS-based threats by sinkholing DNS queries to malicious domains and detecting suspicious DNS activity, thus blocking data exfiltration and C2 communication."
    },
    {
        text: "Which method in the WildFire analysis report detonates unknown submissions to provide visibility into real-world effects and behavior?",
        options: [
            "Dynamic analysis",
            "Static analysis",
            "Intelligent Run-time Memory Analysis",
            "Machine learning (ML)"
        ],
        correctIndexes: [0],
        explanation: "WildFire dynamic analysis detonates unknown files in a secure sandbox environment, analyzing real-world effects, behaviors, and potential malicious activity."
    },
    {
        text: "How many places will a firewall administrator need to create and configure a custom data loss prevention (DLP) profile across Prisma Access and the NGFW?",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctIndexes: [0],
        explanation: "Enterprise DLP profiles are created and managed centrally through the Cloud Management Interface (SCM) and can be used seamlessly across NGFW and Prisma Access deployments."
    },
    {
        text: "A cloud security architect is designing a certificate management strategy for Strata Cloud Manager (SCM) across hybrid environments. Which practice ensures optimal security with low management overhead?",
        options: [
            "Deploy centralized certificate automation with standardized protocols and continuous monitoring.",
            "Implement separate certificate authorities with independent validation rules for each cloud environment.",
            "Configure manual certificate deployment with quarterly reviews and environment-specific security protocols.",
            "Use cloud provider default certificates with scheduled synchronization and localized renewal processes."
        ],
        correctIndexes: [0],
        explanation: "Implementing a centralized certificate management approach with automation and continuous monitoring ensures optimal security while reducing operational complexity in hybrid environments."
    },
    {
        text: "Which set of practices should be implemented with Cloud Access Security Broker (CASB) to ensure robust data encryption and protect sensitive information in SaaS applications?",
        options: [
            "Do not enable encryption for data-at-rest to improve performance.",
            "Use default encryption keys provided by the SaaS provider.",
            "Perform annual encryption key rotations.",
            "Enable encryption for data-at-rest and in transit, regularly update encryption keys, and use strong encryption algorithms."
        ],
        correctIndexes: [3],
        explanation: "CASB solutions should enforce encryption for data-at-rest and in transit, implement key rotation policies, and leverage robust encryption algorithms to protect sensitive SaaS application data."
    },
    {
        text: "How does Strata Logging Service help resolve ever-increasing log retention needs for a company using Prisma Access?",
        options: [
            "It increases resilience due to decentralized collection and storage of logs.",
            "Automatic selection of physical data storage regions decreases adoption time.",
            "It can scale to meet the capacity needs of new locations as business grows.",
            "Log traffic using the licensed bandwidth purchased for Prisma Access reduces overhead."
        ],
        correctIndexes: [2],
        explanation: "The Strata Logging Service is designed to scale dynamically to accommodate growing log retention needs, allowing enterprises to maintain comprehensive visibility as they expand their network footprint."
    },
    {
        text: "After a firewall is associated with Strata Cloud Manager (SCM), which two additional actions are required to enable management of the firewall from SCM? (Choose two.)",
        options: [
            "Deploy a service connection for each branch site and connect with SCM.",
            "Configure NTP and DNS servers for the firewall.",
            "Configure a Security policy allowing 'stratacloudmanager.paloaltonetworks.com' for all users.",
            "Install a device certificate."
        ],
        correctIndexes: [1, 3],
        explanation: "To ensure successful management, configure the firewall's NTP and DNS settings to synchronize time and resolve domain names. A device certificate is also required to authenticate the firewall to Palo Alto Networks cloud services, including SCM."
    },
    {
        text: "How does Advanced WildFire integrate into third-party applications?",
        options: [
            "Through playbooks automatically sending WildFire data",
            "Through customized reporting configured in NGFWs",
            "Through Strata Logging Service",
            "Through the WildFire API"
        ],
        correctIndexes: [3],
        explanation: "WildFire exposes a RESTful API that third-party applications can leverage to integrate WildFire's analysis results and threat intelligence seamlessly into their own security workflows."
    },
    {
        text: "Which two SSH Proxy decryption profile settings should be configured to enhance the company's security posture? (Choose two.)",
        options: [
            "Block sessions when certificate validation fails.",
            "Allow sessions with legacy SSH protocol versions.",
            "Block connections that use non-compliant SSH versions.",
            "Allow sessions when decryption resources are unavailable."
        ],
        correctIndexes: [0, 2],
        explanation: "The SSH Proxy profile should block sessions that fail certificate validation to ensure trust. It should also block SSH sessions that use older or deprecated versions of the SSH protocol to enforce stronger security."
    },
    {
        text: "A network security engineer has created a Security policy in Prisma Access that includes a negated region in the source address. Which configuration will ensure there is no connectivity loss due to the negated region?",
        options: [
            "Set the service to be application-default.",
            "Create a Security policy for the negated region with destination address 'any'.",
            "Add a Dynamic Application Group to the Security policy.",
            "Add all regions that contain private IP addresses to the source address."
        ],
        correctIndexes: [1],
        explanation: "When you use a negated region in a Security policy rule, ensure to create an additional Security policy to permit traffic from the excluded (negated) region to avoid unintentional drops."
    },
    {
        text: "What is a necessary step for creation of a custom Prisma Access report on Strata Cloud Manager (SCM)?",
        options: [
            "Open a support ticket.",
            "Set up Cloud Identity Engine.",
            "Generate a PDF summary report.",
            "Configure a dashboard."
        ],
        correctIndexes: [3],
        explanation: "Dashboards in SCM can be customized to include Prisma Access data sources. Use the dashboard's data visualization to create custom reports, which can be exported as PDFs for distribution."
    },
    {
        text: "Which NGFW function can be used to enhance visibility, protect, block, and log the use of Post-quantum Cryptography (PQC)?",
        options: [
            "DNS Security profile",
            "Decryption policy",
            "Security policy",
            "Decryption profile"
        ],
        correctIndexes: [1],
        explanation: "Decryption policies enable the firewall to see and control encrypted traffic. This visibility and control extend to new cryptographic algorithms, including PQC, to ensure that security measures are applied consistently."
    },
    {
        text: "What is the recommended upgrade path from PAN-OS 9.1 to PAN-OS 11.2?",
        options: [
            "9.1 -> 11.0 -> 11.2",
            "9.1 -> 10.0 -> 11.1",
            "9.1 -> 11.1",
            "9.1 -> 10.0 -> 11.2"
        ],
        correctIndexes: [3],
        explanation: "When upgrading across multiple major PAN-OS releases, you must upgrade to each intermediate major feature release. Skipping major releases is not supported. The path is 9.1 -> 10.0 -> 11.2."
    },
    {
        text: "Which two features can a network administrator use to troubleshoot the issue of a Prisma Access mobile user who is unable to access SaaS applications? (Choose two.)",
        options: [
            "SaaS Application Risk Portal",
            "Capacity Analyzer",
            "GlobalProtect logs",
            "Autonomous Digital Experience Manager (ADEM) console"
        ],
        correctIndexes: [2, 3],
        explanation: "GlobalProtect logs include detailed information about connection establishment and errors. ADEM provides real-time visibility into user experience, identifying connectivity issues for mobile users."
    },
    {
        text: "Which two content updates can be pushed to next-generation firewalls from Panorama? (Choose two.)",
        options: [
            "Advanced URL Filtering",
            "Applications and threats",
            "WildFire",
            "GlobalProtect data file"
        ],
        correctIndexes: [1, 2],
        explanation: "Panorama uses dynamic updates to distribute the latest 'Applications and Threats' signature packs and 'WildFire' updates to all managed firewalls for consistent visibility and protection."
    },
    {
        text: "A network administrator obtains Palo Alto Networks Advanced Threat Prevention and Advanced DNS Security subscriptions. Which step should be included in the initial configuration of the Advanced DNS Security service?",
        options: [
            "Create a decryption policy rule to decrypt DNS-over-TLS / port 853 traffic.",
            "Create overrides for all company owned FQDNS.",
            "Configure DNS Security signature policy settings to sinkhole malicious DNS queries.",
            "Enable Advanced Threat Prevention with default settings and only focus on high-risk traffic"
        ],
        correctIndexes: [2],
        explanation: "The DNS Security service integrates with Anti-Spyware profiles, and you must configure signature policy settings to sinkhole malicious queries. This proactively stops traffic to known malicious domains."
    },
    {
        text: "What must be configured to successfully onboard a Prisma Access remote network using Strata Cloud Manager (SCM)?",
        options: [
            "Cloud Identity Engine",
            "Autonomous Digital Experience Manager (ADEM)",
            "GlobalProtect agent",
            "IPSec termination node"
        ],
        correctIndexes: [3],
        explanation: "To onboard a remote network, configure the IPSec termination node on the customer's premises. This VPN endpoint establishes the secure tunnel to Prisma Access for traffic backhauling."
    },
    {
        text: "In a Prisma SD-WAN environment experiencing voice quality degradation, which initial action is recommended?",
        options: [
            "Immediately modify path quality thresholds.",
            "Review real-time analytics of path performance.",
            "Switch all VoIP traffic to backup paths.",
            "Request an RMA of the ION devices."
        ],
        correctIndexes: [1],
        explanation: "When experiencing performance issues, the first step is to analyze real-time performance data. Prisma SD-WAN provides path quality analytics to identify degradation and ensure informed troubleshooting."
    },
    {
        text: "Which action optimizes user experience across a segmented network architecture and implements the most effective method to maintain secure connectivity between branch and campus locations?",
        options: [
            "Establish site-to-site tunnels on each branch and campus firewall and have individual VLANS for each department.",
            "Configure all branch and campus firewalls to use a single shared broadcast domain.",
            "Implement SD-WAN to route all traffic based on network performance metrics and use zone protection profiles.",
            "Configure a single campus firewall to handle the routing of all branch traffic."
        ],
        correctIndexes: [2],
        explanation: "By implementing SD-WAN, traffic is routed intelligently based on real-time network performance metrics. Zone protection profiles ensure security while maximizing application performance."
    },
    {
        text: "When configuring Security policies on VM-Series firewalls, which set of actions will ensure the most comprehensive Security policy enforcement?",
        options: [
            "Configure port-based policies, check threat logs weekly, conduct software updates annually, and enable decryption.",
            "Configure policies using User-ID and App-ID, enable decryption, apply appropriate security profiles to rules, and update regularly with dynamic updates.",
            "Configure all default policies provided by the firewall, use Policy Optimizer, and adjust security rules after an incident occurs.",
            "Configure a block policy for all malicious inbound traffic, configure an allow policy for all outbound traffic, and update regularly with dynamic updates."
        ],
        correctIndexes: [1],
        explanation: "For comprehensive security, combine User-ID, App-ID, decryption, and security profiles. Keep the firewall updated with dynamic content updates to maintain the strongest security posture."
    },
    {
        text: "Which functionality does an NGFW use to determine whether new session setups are legitimate or illegitimate?",
        options: [
            "SYN bit",
            "SYN cookies",
            "Random Early Detection (RED)",
            "SYN flood protection"
        ],
        correctIndexes: [1],
        explanation: "SYN cookies allow the firewall to verify the legitimacy of new session requests without allocating resources until the handshake is completed. This prevents SYN flood attacks from exhausting system resources."
    },
    {
        text: "Which two security services are required for configuration of NGFW Security policies to protect against malicious and misconfigured domains? (Choose two.)",
        options: [
            "Advanced Threat Prevention",
            "SaaS Security",
            "Advanced WildFire",
            "Advanced DNS Security"
        ],
        correctIndexes: [0, 3],
        explanation: "Advanced Threat Prevention detects exploits and malware-based communications, including those leveraging DNS. Advanced DNS Security uses real-time intelligence to sinkhole suspicious domain lookups."
    },
    {
        text: "Which step is necessary to ensure an organization is using the inline cloud analysis features in its Advanced Threat Prevention subscription?",
        options: [
            "Disable anti-spyware to avoid performance impacts and rely solely on external threat intelligence.",
            "Enable SSL decryption in Security policies to inspect and analyze encrypted traffic for threats.",
            "Update or create a new anti-spyware security profile and enable the appropriate local deep learning models.",
            "Configure Advanced Threat Prevention profiles with default settings and only focus on high-risk traffic."
        ],
        correctIndexes: [2],
        explanation: "To activate inline cloud analysis, update your Anti-Spyware profile to enable advanced inline detection engines, including deep learning-based models and cloud-delivered signatures."
    },
    {
        text: "Which zone is available for use in Prisma Access?",
        options: [
            "Clientless VPN",
            "Interzone",
            "Intrazone",
            "DMZ"
        ],
        correctIndexes: [1],
        explanation: "You can configure an interzone rule to control traffic that flows between different zones in Prisma Access, enabling granular security policy enforcement."
    },
    {
        text: "Which offering can be managed in both Panorama and Strata Cloud Manager (SCM)?",
        options: [
            "Autonomous Digital Experience Manager (ADEM)",
            "VM-Series Next-Generation Firewall (NGFW)",
            "Prisma SD-WAN",
            "SaaS Security"
        ],
        correctIndexes: [1],
        explanation: "You can manage VM-Series Next-Generation Firewalls using either Panorama for centralized management or Strata Cloud Manager for cloud-based management."
    },
    {
        text: "Which type of NGFW IP address is supported in active/passive design but not in active/active design?",
        options: [
            "Single floating IP address",
            "Using a DHCP client",
            "Route-based redundancy",
            "Configuring ARP load-sharing on Layer 3"
        ],
        correctIndexes: [0],
        explanation: "In active/passive HA, a single floating IP address is used for seamless failover. Active/active HA requires separate IP addresses and does not support a single floating IP."
    },
    {
        text: "What key capability distinguishes Content-ID technology from conventional network security approaches?",
        options: [
            "It performs packet header analysis short of deep packet inspection.",
            "It provides single-pass application layer inspection for real-time threat prevention.",
            "It exclusively monitors network traffic volumes.",
            "It relies primarily on reputation-based filtering."
        ],
        correctIndexes: [1],
        explanation: "Content-ID uses a single-pass architecture to perform application-layer (Layer 7) traffic inspection and real-time threat prevention. Unlike traditional firewalls, it inspects traffic once to enforce multiple controls."
    },
    {
        text: "In a distributed enterprise implementing Prisma SD-WAN, which configuration element should be implemented first to ensure optimal traffic flow between remote sites and headquarters?",
        options: [
            "Deploy redundant ION devices at each location.",
            "Implement dynamic path selection using real-time performance metrics.",
            "Configure static routes between all the branch offices.",
            "Enable split tunneling for all branch locations."
        ],
        correctIndexes: [1],
        explanation: "Dynamic path selection continuously monitors performance metrics (loss, latency, jitter) and makes real-time routing decisions to ensure application SLAs are met across the WAN."
    },
    {
        text: "Which two components of a Security policy, when configured, allow third-party contractors access to internal applications outside business hours? (Choose two.)",
        options: [
            "App-ID",
            "Service",
            "User-ID",
            "Schedule"
        ],
        correctIndexes: [2, 3],
        explanation: "User-ID enables policies based on identity (e.g., contractors). Schedules allow policies to be active only during specific times (e.g., after business hours)."
    },
    {
        text: "Based on the need to decrypt SaaS applications, which two steps are appropriate to ensure success? (Choose two.)",
        options: [
            "Configure SSL Forward Proxy.",
            "Validate which certificates will be used to establish trust.",
            "Configure SSL Inbound Inspection.",
            "Create new self-signed certificates to use for decryption."
        ],
        correctIndexes: [0, 1],
        explanation: "The SSL Forward Proxy decryption profile enables the firewall to decrypt outbound SSL traffic (essential for SaaS). Validating certificates is critical for establishing trust and preventing SSL errors."
    },
    {
        text: "A network security engineer wants to forward Strata Logging Service data to tools used by the Security Operations Center (SOC). In which best practice step of Palo Alto Networks Zero Trust does this fit?",
        options: [
            "Map and Verify Transactions",
            "Implementation",
            "Standards and Designs",
            "Report and Maintenance"
        ],
        correctIndexes: [3],
        explanation: "The Report and Maintenance phase includes continuous monitoring, log forwarding, and sharing of security telemetry to third-party tools to maintain and validate Zero Trust implementation."
    },
    {
        text: "A network engineer pushes specific Panorama reports of new AI URL category types to branch NGFWs. Which two report types achieve this goal? (Choose two.)",
        options: [
            "SNMP",
            "Custom",
            "PDF summary",
            "CSV export"
        ],
        correctIndexes: [1, 2],
        explanation: "Custom Reports provide tailored reporting based on URL categories. PDF summary reports can be generated to distribute these insights across branch firewalls in an easy-to-read format."
    },
    {
        text: "Which subscription sends non-file format-based traffic that matches Data Filtering Profile criteria to a cloud service to render a verdict?",
        options: [
            "Enterprise DLP",
            "Advanced URL Filtering",
            "SaaS Security Inline",
            "Advanced WildFire"
        ],
        correctIndexes: [0],
        explanation: "Enterprise DLP inspects data in non-file-based traffic flows, forwarding suspicious data patterns to the cloud for classification and verdicts."
    },
    {
        text: "How are policies evaluated in the AWS management console when creating a Security policy for a Cloud NGFW?",
        options: [
            "The administrator sets a rule order to determine the order in which they are evaluated.",
            "They can be dragged up or down the stack as they are evaluated.",
            "The administrator sets a rule priority to determine the order in which they are evaluated.",
            "They must be created in the order they are intended to be evaluated."
        ],
        correctIndexes: [3],
        explanation: "In AWS, security rules are evaluated in the order they are created. To ensure the correct evaluation logic, create them in the desired order from top to bottom."
    },
    {
        text: "During a security incident investigation, which Security profile will have logs of attempted confidential data exfiltration?",
        options: [
            "File Blocking Profile",
            "Enterprise DLP Profile",
            "Vulnerability Protection Profile",
            "WildFire Analysis Profile"
        ],
        correctIndexes: [1],
        explanation: "Enterprise DLP logs capture incidents involving potential data exfiltration. They help identify sensitive data transfers, even in seemingly legitimate traffic."
    },
    {
        text: "Which set of attributes is used by IoT Security to identify and classify a device on a network when determining Device-ID?",
        options: [
            "IP address, network traffic patterns, and device type",
            "MAC address, device manufacturer, and operating system",
            "Hostname, application usage, and encryption method",
            "Device model, firmware version, and user credential"
        ],
        correctIndexes: [1],
        explanation: "IoT Security uses passive network traffic analysis to fingerprint devices based on the MAC address, manufacturer, and operating system to ensure accurate classification."
    },
    {
        text: "Which two types of logs must be forwarded to Strata Logging Service for IoT Security to function? (Choose two.)",
        options: [
            "WildFire",
            "Enhanced application",
            "Threat",
            "URL Filtering"
        ],
        correctIndexes: [1, 2],
        explanation: "Enhanced Application logs provide context on IoT device behavior. Threat logs are critical for identifying potential exploits or suspicious activities involving IoT devices."
    },
    {
        text: "Which action is only taken during slow path in the NGFW policy?",
        options: [
            "Session lookup",
            "Layer 2-Layer 4 firewall processing",
            "SSL/TLS decryption",
            "Security policy lookup"
        ],
        correctIndexes: [2],
        explanation: "SSL/TLS decryption, which requires CPU-intensive cryptographic operations, is performed during the slow path when establishing new sessions. Once decrypted, traffic is processed in the fast path."
    },
    {
        text: "Which feature of SaaS Security will allow a firewall administrator to identify unknown SaaS applications in an environment?",
        options: [
            "App-ID Cloud Engine",
            "App-ID",
            "SaaS Data Security",
            "Cloud Identity Engine"
        ],
        correctIndexes: [0],
        explanation: "App-ID Cloud Engine (ACE) uses real-time cloud intelligence to identify SaaS applications, including previously unknown or newly introduced applications."
    },
    {
        text: "How do Cloud NGFW instances get created when using AWS centralized deployments?",
        options: [
            "Cloud NGFW is placed in a vWAN with a virtual hub.",
            "They replace the internet gateway service.",
            "Selected VPCs will have Cloud NGFW workloads added to them.",
            "A security VPC will be created as transit gateways to push all traffic through the area."
        ],
        correctIndexes: [2],
        explanation: "In centralized deployments, Cloud NGFW instances are deployed as security appliances within the selected VPCs, ensuring consistent traffic inspection and protection."
    },
    {
        text: "Which GlobalProtect configuration is recommended for granular security enforcement of remote user device posture?",
        options: [
            "Configuring host information profile (HIP) checks for all mobile users",
            "Configuring a rule that blocks the ability of users to disable GlobalProtect",
            "Implementing multi-factor authentication (MFA) for all users",
            "Applying log at session end to all GlobalProtect Security policies"
        ],
        correctIndexes: [0],
        explanation: "The HIP feature collects information about the host and can be used in security policies to enforce posture-based access control. This ensures only compliant endpoints can access sensitive resources."
    },
    {
        text: "Which AI-powered solution provides unified management and operations for NGFWs and Prisma Access?",
        options: [
            "Strata Cloud Manager (SCM)",
            "Autonomous Digital Experience Manager (ADEM)",
            "Prisma Access Browser",
            "Panorama"
        ],
        correctIndexes: [0],
        explanation: "Strata Cloud Manager provides a single interface for unified management of NGFWs and Prisma Access, leveraging AI to optimize security operations and streamline workflows."
    },
    {
        text: "Which action allows an engineer to collectively update VM-Series firewalls with Strata Cloud Manager (SCM)?",
        options: [
            "Creating an update grouping rule",
            "Scheduling software update",
            "Creating a device grouping rule",
            "Setting a target OS version"
        ],
        correctIndexes: [2],
        explanation: "SCM allows you to create device group rules, enabling streamlined management and collective updates of multiple NGFW instances."
    },
    {
        text: "A network security engineer needs to implement segmentation but is under strict compliance requirements to place security enforcement as close as possible to the private applications hosted in Azure. Which deployment style is valid?",
        options: [
            "On a VM-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces.",
            "On a PA-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces.",
            "On a VM-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces.",
            "On a PA-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces."
        ],
        correctIndexes: [2],
        explanation: "In Azure, deploy VM-Series firewalls in Layer 3 mode to enforce security policies closest to private applications, meeting strict compliance and segmentation requirements."
    },
    {
        text: "A primary firewall in a high availability (HA) pair is experiencing a current failover issue with ICMP pings to a secondary device. Which metric should be reviewed for proper ICMP pings?",
        options: [
            "Link monitoring",
            "Non-functional state",
            "Heartbeat polling",
            "Bidirectional Forwarding Detection (BFD)"
        ],
        correctIndexes: [2],
        explanation: "Heartbeat Polling uses ICMP pings to verify the connectivity and health of the HA peers. If heartbeat polling fails, the firewall considers the peer to be down and may initiate failover."
    },
    {
        text: "What are two recommendations to ensure secure and efficient connectivity across multiple locations in a distributed enterprise network? (Choose two.)",
        options: [
            "Use Prisma Access to provide secure remote access for branch users.",
            "Employ centralized management and consistent policy enforcement across all locations.",
            "Create broad VPN policies for contractors working at branch locations.",
            "Implement a flat network design for simplified network management and reduced overhead."
        ],
        correctIndexes: [0, 1],
        explanation: "Prisma Access extends consistent security and optimized connectivity. Centralized management (SCM or Panorama) ensures security policies are uniformly applied preventing policy drift."
    },
    {
        text: "Which two configurations are required when creating deployment profiles to migrate a perpetual VM-Series firewall to a flexible VM? (Choose two.)",
        options: [
            "Choose 'Fixed vCPU Models' for configuration type.",
            "Allocate the same number of vCPUs as the perpetual VM.",
            "Allow only the same security services as the perpetual VM.",
            "Deploy virtual Panorama for management."
        ],
        correctIndexes: [1, 2],
        explanation: "When migrating licenses, allocate the same vCPU resources to ensure equivalent performance. Also, ensure you allow only the same security services on the flexible VM instance as were licensed on the perpetual VM."
    },
    {
        text: "What occurs when a security profile group named 'default' is created on an NGFW?",
        options: [
            "It only applies to traffic that has been tagged.",
            "It allows traffic to bypass all security checks by default.",
            "It negates all existing security profiles rules on new policy.",
            "It is automatically applied to all new security rules."
        ],
        correctIndexes: [3],
        explanation: "If a security profile group named 'default' exists, it will be automatically applied to any newly created security policy rules to ensure consistent protection."
    },
    {
        text: "In a service provider environment, what key advantage does implementing virtual systems provide for managing multiple customer environments?",
        options: [
            "Shared threat prevention policies across all tenants",
            "Centralized authentication for all customer domains",
            "Unified logging across all virtual systems",
            "Logical separation of control and Security policy"
        ],
        correctIndexes: [3],
        explanation: "Virtual systems enable service providers to offer logically separated, independent environments on a single firewall. Each virtual system can have its own security policies, interfaces, and administrators."
    },
    {
        text: "An administrator wants to implement additional Cloud-Delivered Security Services (CDSS) on a data center NGFW. What benefit does the single-pass parallel processing (SP3) architecture provide?",
        options: [
            "It allows for traffic inspection at the application level.",
            "There will be no additional performance degradation.",
            "There will be only a minor reduction in performance.",
            "It allows additional security inspection devices to be added inline."
        ],
        correctIndexes: [2],
        explanation: "The SP3 architecture performs application identification and security enforcement simultaneously in one pass, resulting in only minor performance impacts when enabling multiple security services."
    },
    {
        text: "How can a firewall administrator block a list of 300 unique URLs in the most time-efficient manner?",
        options: [
            "Use application filters to block the App-IDs.",
            "Use application groups to block the App-IDs.",
            "Import the list into a custom URL category.",
            "Block multiple predefined URL categories."
        ],
        correctIndexes: [2],
        explanation: "You can create custom URL categories to define specific URLs or patterns and enforce policies for these categories. This is the most efficient way to handle large sets of URLs."
    },
    {
    text: "In a service provider environment, what key advantage does implementing virtual systems provide for managing multiple customer environments?",
    options: [
        "Shared threat prevention policies across all tenants",
        "Centralized authentication for all customer domains",
        "Unified logging across all virtual systems",
        "Logical separation of control and Security policy"
    ],
    correctIndexes: [3],
    explanation: "Virtual systems (vsys) provide logical separation in a single physical firewall, allowing different customers (or tenants) to have isolated control and security policies. Each virtual system can have its own security policies, interfaces, and administrators, ensuring secure, tenant-specific segmentation."
    }
]);