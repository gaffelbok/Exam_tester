window.loadExamData([
    {
        text: "In a pool there are 2 pool members out of the 5 members that are older servers. The number of connections these can handle is less than the other 3 pool members. Which load balancing method would allow more traffic to be directed to the newer servers? (Choose one answer)",
        options: [
            "Global Availability",
            "Weighted Least Connections (member)",
            "Round Robin",
            "Least Connections (member)"
        ],
        correctIndexes: [1],
        explanation: "When a pool contains servers with heterogeneous hardware capabilities (differing CPU, RAM, or connection limits), a static load balancing method like Round Robin is ineffective because it distributes requests equally, regardless of the server's capacity. To optimize traffic distribution for newer, more powerful servers, a dynamic or weighted method is required.* Weighted Least Connections (member): This is the ideal method for this scenario. It combines two factors:* Least Connections: It first checks the current active connection count to ensure traffic goes to the least busy server.* Weight (Ratio): It allows the administrator to assign a \"Ratio\" value to each pool member. Newer servers can be assigned a higher ratio (e.g., 3) while older servers are assigned a lower ratio (e.g.,1). The BIG-IP system uses these weights to disproportionately favor the newer servers even when connection counts are similar.* Why other options are incorrect:* Global Availability: This is primarily a GSLB (Global Server Load Balancing) or specific LTM priority group concept where traffic is sent to the first available member in a list until it fails, then moves to the next. It does not load balance based on capacity.* Round Robin: This passes each new connection request to the next server in line, treating the old and new servers exactly the same.* Least Connections (member): While this sends traffic to the server with the fewest active connections, it assumes all servers are equal. If an old server and a new server both have 10 connections, they are treated as equally capable of taking the 11th, which is not true in this scenario."
    },
    {
        text: "The BIG-IP Administrator has to provide encrypted communication between users and the virtual server they access. Multiple hostnames are configured in DNS with the same IP address. Which profile type and setting in the profile should be used? (Choose one answer)",
        options: [
            "Client SSL, Client Name",
            "Server SSL, Server Name",
            "Client SSL, Server Name",
            "Server SSL, Client Name"
        ],
        correctIndexes: [2],
        explanation: "When multiple hostnames resolve to the same IP address and encrypted communication is required, the BIG- IP must be able to present the correct SSL certificate based on the hostname requested by the client. This is accomplished using Server Name Indication (SNI).According to BIG-IP Administration: Data Plane Configuration documentation:* SNI is a client-side TLS extension, where the client includes the requested hostname during the SSL handshake.* BIG-IP evaluates this hostname using the Client SSL profile, not the Server SSL profile.* The \"Server Name\" setting in the Client SSL profile enables BIG-IP to select the appropriate SSL certificate for the requested hostname.Why option C is correct:* Client SSL profile handles inbound (client-side) encryption.* Server Name enables SNI-based certificate selection when multiple DNS names share the same virtual server IP.Why the other options are incorrect:* A. Client SSL, Client NameThere is no Client SSL setting called Client Name for SNI certificate selection.* B. Server SSL, Server NameServer SSL is used for encryption between BIG-IP and backend servers, not for client-side hostname identification.* D. Server SSL, Client NameServer SSL does not process client-requested hostnames during TLS negotiation.Correct Resolution:Configure a Client SSL profile and enable the Server Name (SNI) setting to support multiple encrypted hostnames on the same virtual server IP."
    },
    {
        text: "A node is a member of multiple pools hosting different web applications. If one application fails, only that pool member should be marked down. What should be configured?",
        options: [
            "UDP monitor",
            "ICMP + TCP monitor",
            "HTTP monitor with custom send/receive",
            "TCP monitor"
        ],
        correctIndexes: [2],
        explanation: "Application-specific health checks must validate application responses, which requires HTTP monitors with custom send/receive strings."
    },
    {
        text: "Which Virtual Server type prevents the use of a default pool?",
        options: [
            "Performance (Layer 4)",
            "Forwarding (IP)",
            "Performance (HTTP)",
            "Standard"
        ],
        correctIndexes: [1],
        explanation: "Forwarding (IP) virtual servers forward traffic based on routing decisions and do not use pools or pool members."
    },
    {
        text: "The BIG-IP Administrator needs to load balance a pool of web servers. Load balancing should consider the number of connections that are active on that pool member. Which load balancing method meets this requirement? (Choose one answer)",
        options: [
            "Least Connections (member)",
            "Round Robin",
            "Ratio (member)",
            "Ratio (node)"
        ],
        correctIndexes: [0],
        explanation: "The requirement states that load balancing decisions must be based on the number of active connections on each pool member. This directly maps to the Least Connections (member) load balancing method.According to the BIG-IP Administration: Data Plane Configuration documentation:* Least Connections (member) selects the pool member with the fewest active connections at the time of the request.* This method dynamically adapts to real-time traffic patterns and ensures that more heavily loaded pool members receive fewer new connections.* It is especially effective for web servers where connection duration may vary and equal distribution of active sessions is desired.Why the other options are incorrect:* B. Round RobinDistributes connections sequentially without considering current load or active connections.* C. Ratio (member)Distributes traffic based on static ratios, not real-time connection counts.* D. Ratio (node)Uses predefined ratios at the node level and does not account for active connection counts.Correct Resolution:Using Least Connections (member) ensures that new connections are directed to the pool member currently handling the fewest active connections, meeting the stated requirement."
    },
    {
        text: "A Standard Virtual Server for a web application is configured with SNAT Automap. The original client IP must be known by backend servers. What should the BIG-IP Administrator configure?",
        options: [
            "Performance (HTTP) Virtual Server",
            "HTTP profile with X-Forwarded-For",
            "HTTP Transparent profile",
            "SNAT pool using client IP"
        ],
        correctIndexes: [1],
        explanation: "X-Forwarded-For inserts the original client IP into HTTP headers while SNAT is enabled."
    },
    {
        text: "A BIG-IP Administrator adds new pool members into an existing, highly utilized pool. Soon after, there are reports that the application is failing to load for some users. What pool-level setting should the BIG-IP Administrator check?",
        options: [
            "Availability Requirement",
            "Allow SNAT",
            "Action On Service Down",
            "Slow Ramp Time"
        ],
        correctIndexes: [3],
        explanation: "Slow Ramp Time prevents new pool members from receiving a full share of traffic immediately, allowing applications to warm up gradually."
    },
    {
        text: "A BIG-IP Administrator adds new pool members to a highly utilized pool. The application begins failing. What pool-level setting should be checked?",
        options: [
            "Availability Requirement",
            "Allow SNAT",
            "Action On Service Down",
            "Slow Ramp Time"
        ],
        correctIndexes: [3],
        explanation: "Slow Ramp Time prevents new members from being overwhelmed immediately after activation."
    },
    {
        text: "An organization reports slow performance accessing an Intranet website. All employees use a single proxy IP. What should the BIG-IP Administrator do?",
        options: [
            "Change Source Address to proxy IP",
            "Change Load Balancing to Least Connections",
            "Change Fallback Persistence to source_addr",
            "Change Default Persistence to cookie"
        ],
        correctIndexes: [3],
        explanation: "When many users share one source IP, source-address persistence fails. Cookie persistence uniquely identifies clients at Layer 7."
    },
    {
        text: "The BIG-IP Administrator has to provide encrypted communication between the users and the virtual server they access. Multiple hostnames are configured in DNS with the same IP address. Which profile type and setting in the profile should be used? (Choose one answer)",
        options: [
            "Client SSL, Client Name",
            "Server SSL, Server Name",
            "Client SSL, Server Name",
            "Server SSL, Client Name"
        ],
        correctIndexes: [2],
        explanation: "To provide encrypted communication between users and a virtual server, the BIG-IP system acts as a transparent SSL/TLS proxy. The administrative configuration required for this is a Client SSL profile.When multiple hostnames (FQDNs) are associated with a single IP address, the system must determine which SSL certificate to present to the client during the initial TLS handshake. This is achieved using an extension of the TLS protocol called Server Name Indication (SNI).The configuration logic is as follows:* Profile Type: The Client SSL profile is responsible for terminating the SSL connection from the client (the user) to the BIG-IP system.* The Setting: Within the Client SSL profile (under the \"Advanced\" view), there is a field specifically called Server Name. By entering the specific hostname (e.g., www.example.com) in this field, the BIG- IP system can match the hostname requested by the client in the ClientHello message to the correct profile.* Implementation: The administrator typically creates multiple Client SSL profiles-one for each hostname-and assigns them all to the same virtual server. One of these profiles must be designated as the Default SSL Profile for SNI to handle requests where the client does not provide a hostname or provides one that does not match any specific profile.By using the Client SSL profile and the Server Name setting, the BIG-IP system ensures that each user receives the correct certificate for the specific site they are trying to reach, even though all sites share a single virtual server IP."
    },
    {
        text: "Some users who connect to a busy Virtual Server have connections reset by the BIG-IP system. Pool member resources are NOT a factor. What is a possible cause?",
        options: [
            "Connection Rate Limit is set too high",
            "Server SSL profile not reconfigured",
            "Connection Limit is set too low",
            "Rewrite profile not configured"
        ],
        correctIndexes: [2],
        explanation: "When the connection limit is reached, BIG-IP resets new connections, even if pool members are healthy."
    },
    {
        text: "A Standard Virtual Server for a web application is configured with Automap for Source Address Translation.The original client IP must be known by backend servers.What should the BIG-IP Administrator configure?",
        options: [
            "Performance (HTTP) Virtual Server",
            "HTTP profile to insert X-Forwarded-For",
            "HTTP Transparent profile",
            "SNAT pool using client IP"
        ],
        correctIndexes: [1],
        explanation: "The X-Forwarded-For header preserves the original client IP when SNAT is enabled."
    },
    {
        text: "A BIG-IP Administrator configures an SSH pool with five members.Which health monitor should be applied?",
        options: [
            "HTTPS",
            "UDP",
            "HTTP",
            "TCP"
        ],
        correctIndexes: [3],
        explanation: "SSH is a TCP-based service. A TCP monitor validates service availability without requiring application-layer inspection."
    },
    {
        text: "A node is a member of multiple pools and hosts different applications. If one application becomes unavailable, only that pool member should be marked down.What should the BIG-IP Administrator deploy?",
        options: [
            "ICMP + TCP monitor",
            "TCP monitor",
            "UDP monitor",
            "HTTP monitor with custom send/receive"
        ],
        correctIndexes: [3],
        explanation: "Application-level monitors ensure that only the affected service is marked down, not the entire node."
    },
    {
        text: "A virtual server is configured to offload SSL from a pool of backend servers. When users connect to the virtual server, they successfully establish an SSL connection but no content is displayed. A packet trace performed on the server shows that the server receives and responds to the request. What should a BIG-IP Administrator do to resolve the problem? (Choose one answer)",
        options: [
            "enable Server SSL profile",
            "disable Server SSL profile",
            "disable SNAT",
            "enable SNAT"
        ],
        correctIndexes: [3],
        explanation: "This scenario describes a classic case of asymmetric routing in a \"one-arm\" or non-gateway deployment.When a BIG-IP system is configured for SSL offloading, the following traffic flow occurs:* Client-Side: The client establishes a successful SSL/TLS handshake with the Virtual Server. This explains why the user can \"successfully establish an SSL connection.\"* Server-Side: The BIG-IP decrypts the traffic and forwards it as plain HTTP to the backend server. The packet trace confirms the server receives the HTTP GET request and responds with the content.* The Routing Failure: By default, the BIG-IP system preserves the client's original source IP address. If the backend server's default gateway is not the BIG-IP system (or if the server is on the same subnet as the client), the server will attempt to send the response directly back to the client's IP address, bypassing the BIG-IP.* Stateful Drop: Because the BIG-IP is a Full Proxy, it expects the response to return through its own internal state table to be encrypted and sent back to the client. Since the response bypasses the BIG-IP, the BIG-IP connection eventually times out, and the client receives no data despite the server having sent it.Solution (SNAT): Enabling Secure Network Address Translation (SNAT), specifically SNAT Auto Map, ensures that the BIG-IP replaces the client's source IP with its own internal self-IP before sending the request to the server. This forces the server to send the response back to the BIG-IP, allowing the BIG-IP to complete the transaction and deliver the content to the user."
    },
    {
        text: "DNS queries from internal DNS servers fail when sent through a BIG-IP Virtual Server.Which Virtual Server property should be changed?",
        options: [
            "Protocol Profile (Client) to DNS_OPTIMIZED",
            "Type to Performance (HTTP)",
            "Protocol to UDP",
            "Source Address to subnet"
        ],
        correctIndexes: [2],
        explanation: "Standard DNS queries use UDP. Configuring the Virtual Server for TCP causes DNS traffic to fail."
    },
    {
        text: "The BIG-IP Administrator is investigating whether better TCP performance is possible for a virtual server.Which built-in profile should be tried first? (Choose one answer)",
        options: [
            "f5-tcp-legacy",
            "f5-tcp-progressive",
            "f5-tcp-mobile",
            "No option"
        ],
        correctIndexes: [1],
        explanation: "BIG-IP provides several built-in TCP profiles optimized for different traffic patterns and network conditions.When attempting to improve general TCP performance, the recommended starting point is f5-tcp-progressive.According to the BIG-IP Administration: Data Plane Configuration documentation:* f5-tcp-progressive is designed as a balanced, general-purpose TCP optimization profile.* It dynamically adjusts TCP behavior to improve throughput and latency for most enterprise applications.* It is the recommended first-choice profile when tuning TCP performance before moving to more specialized profiles.Why the other options are incorrect:* A. f5-tcp-legacyThis profile exists for backward compatibility and does not include modern TCP optimizations.* C. f5-tcp-mobileThis profile is optimized specifically for high-latency, lossy mobile networks and is not suitable for general-purpose environments.* D. No optionBIG-IP explicitly provides built-in TCP profiles for performance tuning; using none would forgo optimization opportunities.Correct Resolution:The administrator should first apply f5-tcp-progressive to evaluate potential TCP performance improvements before considering more specialized profiles."
    },
    {
        text: "A web server administrator informs the BIG-IP Administrator that web servers currently load-balanced require encrypted traffic. Starting next month, the web server administrator will offload SSL. Starting next month, the BIG-IP device will terminate SSL to reduce web server load. The BIG-IP device is already using Client SSL, Client port, and iRules on HTTP traffic. What actions should the BIG-IP Administrator take to achieve the desired configuration? (Choose one answer)",
        options: [
            "Remove the server SSL profile and configure the pool members to use HTTP",
            "Remove the client SSL profile and configure the pool members to use HTTP",
            "Remove the server SSL profile and change the Virtual Server to accept HTTP traffic",
            "Remove the client SSL profile and change the Virtual Server to accept HTTP traffic"
        ],
        correctIndexes: [0],
        explanation: "To solve this requirement, we must distinguish between the two \"legs\" of an SSL connection in a BIG-IP environment: Client-side and Server-side.* Current State (SSL Bridging): The administrator states the servers currently require encrypted traffic.This means the BIG-IP is likely performing \"SSL Bridging.\" In this setup, a Client SSL profile terminates encryption from the user, and a Server SSL profile re-encrypts the traffic before sending it to the back-end servers.* Target State (SSL Offloading): The requirement is to \"offload SSL\" to reduce web server load. This means the BIG-IP will continue to handle the encryption for the users (keeping the Client SSL profile) but will communicate with the back-end servers using unencrypted HTTP.Why Option A is correct:* Remove the Server SSL profile: By removing this profile, the BIG-IP stops attempting to initiate an SSL/TLS handshake with the pool members.* Configure Pool Members to use HTTP: The service port for the pool members must be changed (typically from port 443 to port 80) so that the BIG-IP sends standard HTTP traffic to the servers.Why other options are incorrect:* B & D: These suggest removing the Client SSL profile. If you remove this, the users can no longer connect via HTTPS, which violates the requirement for encrypted communication between the users and the BIG-IP.* C: Changing the Virtual Server to accept HTTP traffic would mean the user-to-BIG-IP connection is no longer encrypted, which is the opposite of SSL termination/offloading."
    },
    {
        text: "A BIG-IP Administrator needs to configure health monitors for a pool containing HTTP, HTTPS, FTP, and SSH services.Which configuration ensures accurate member status?",
        options: [
            "All monitors with Availability Requirement = all",
            "All monitors with Availability Requirement = at least one",
            "ICMP + TCP with all",
            "HTTP and HTTPS only"
        ],
        correctIndexes: [1],
        explanation: "Using \"at least one\" ensures each member is marked up based on its relevant service monitor."
    },
    {
        text: "All pool members are online and all other settings are default.What might alter the load balancing behavior?",
        options: [
            "Adding a OneConnect profile",
            "Enabling SNAT Automap",
            "Enabling an HTTP fallback host",
            "Adding a persistence profile"
        ],
        correctIndexes: [3],
        explanation: "Persistence overrides load balancing decisions by maintaining client-to-server affinity."
    },
    {
        text: "A BIG-IP Administrator creates a new Virtual Server. The end user is unable to access the page. During troubleshooting, the administrator learns that the connection between the BIG-IP system and server is NOT set up correctly. What should the administrator do to solve this issue? (Choose one answer)",
        options: [
            "Disable Address Translation",
            "Set Address Translation to Auto Map, configure a SNAT pool, and have pool members in the same subnet as the servers",
            "Set Address Translation to SNAT and configure a specific translation address",
            "Set Address Translation to SNAT and have a self-IP configured in the same subnet as the servers"
        ],
        correctIndexes: [3],
        explanation: "The issue described is a classic symptom of asymmetric routing, which frequently occurs when the BIG-IP system and the back-end servers reside on the same subnet (often referred to as a \"one-arm\" deployment).* The Routing Problem: By default, the BIG-IP system preserves the original client source IP address when forwarding traffic to a pool member. If the server is in the same subnet as the client or if the server's default gateway is not the BIG-IP, the server will attempt to send its response directly back to the client's IP address, bypassing the BIG-IP.* Stateful Failure: Since the BIG-IP is a Full Proxy, it maintains a state table. Because the response packet never returns through the BIG-IP, the system cannot complete the three-way handshake or manage the application session, resulting in a connection failure for the user.* The Solution (SNAT): Enabling Source Network Address Translation (SNAT) solves this by changing the source IP address of the request to an IP address owned by the BIG-IP (typically a self-IP).* Requirement for Subnet Alignment: To ensure the server sends the response back to the BIG-IP, the translation address must be reachable. By using a self-IP configured in the same subnet as the servers, the BIG-IP ensures that the server sees the request coming from a local \"neighbor.\" The server will then naturally send the response back to that self-IP, allowing the BIG-IP to translate the packet back and forward it to the client.Why other options are incorrect:* A: Disabling address translation would ensure the server-side traffic uses the client IP, making asymmetric routing inevitable in this scenario.* B: This is technically contradictory; \"Auto Map\" specifically uses existing self-IPs and does not require or use a \"SNAT pool\" configuration.* C: While using a specific translation address can work, it does not inherently guarantee the Layer 2/Layer 3 reachability mentioned in the scenario as effectively as ensuring the self-IP is correctly placed in the server's subnet."
    },
    {
        text: "Refer to the exhibit. DNS queries from two internal DNS servers are being load-balanced to external DNS servers via a virtual server on a BIG-IP device. The DNS queries originate from:192.168.10.100192.168.10.200and target:192.168.2.150All DNS queries destined for the external DNS servers fail.Which property change should the BIG-IP Administrator make in the Virtual Server to resolve this issue?(Choose one answer)",
        image: "q22.png",
        options: [
            "Protocol profile (Client) to DNS_OPTIMIZED",
            "Type to Performance (HTTP)",
            "Source Address to 192.168.10.0/24",
            "Protocol to UDP"
        ],
        correctIndexes: [3],
        explanation: "DNS traffic is primarily transported using UDP port 53. In the exhibit, the Virtual Server is configured with the Protocol set to TCP, which prevents standard DNS queries from being processed correctly. BIG-IP Virtual Servers must be configured with the correct Layer 4 protocol to match the application traffic they are handling.According to the BIG-IP Administration: Data Plane Configuration documentation:* The Protocol setting on a Virtual Server defines whether traffic is processed as TCP, UDP, or another supported transport protocol.* Standard DNS queries and responses use UDP, while TCP is only required for DNS zone transfers (AXFR) or exceptionally large responses.* When a DNS Virtual Server is incorrectly configured with TCP, UDP-based DNS queries are dropped, causing all requests to fail.Why the other options are incorrect:* A. Protocol profile (Client) to DNS_OPTIMIZEDA DNS profile enhances DNS functionality but does not correct an incorrect transport protocol configuration.* B. Type to Performance (HTTP)Performance (HTTP) Virtual Servers are designed for HTTP traffic and are not suitable for DNS services.* C. Source Address to 192.168.10.0/24The existing source IPs already fall within the allowed range, so this setting does not address the failure.Correct Resolution:Changing the Protocol to UDP aligns the Virtual Server with standard DNS transport requirements, allowing DNS queries to be successfully processed and load-balanced."
    },
    {
        text: "Which type of Virtual Server requires the use of a FastL4 profile?",
        options: [
            "Performance (Layer 4)",
            "Stateless",
            "Performance (HTTP)",
            "Standard"
        ],
        correctIndexes: [0],
        explanation: "Performance (Layer 4) virtual servers rely on FastL4 profiles to provide high-speed L4 processing without full proxy overhead.Below is BATCH 2 (next 10 questions) extracted only from your uploaded document that are clearly related to BIG-IP Administration: Data Plane Configuration topics.#As requested, I have strictly excluded questions related to:* Licensing* HA / Device Trust / Sync-only* Logging destinations* User roles* Hardware, EUD, support processes* System-only administrationSource: Your uploaded TMOS Administration v2.0 document"
    },
    {
        text: "A BIG-IP Administrator uses backend servers to host multiple services per server. There are multiple virtual servers and pools defined, referencing the same backend servers.Which load balancing algorithm is most appropriate to have an equal number of connections on each backend server? (Choose one answer)",
        options: [
            "Least Connections (node)",
            "Predictive (member)",
            "Least Connections (member)",
            "Predictive (node)"
        ],
        correctIndexes: [0],
        explanation: "In this scenario, each backend node (server) hosts multiple services and is referenced by multiple pools and virtual servers. The goal is to ensure an equal number of total connections per backend server, regardless of how many pool members (services/ports) exist on that server.According to the BIG-IP Administration: Data Plane Configuration documentation:* Least Connections (node) tracks the total number of active connections to a node across all pool members and services.* This algorithm ensures load distribution is balanced at the server level, not just at the individual service (member) level.* It is specifically recommended when:* Multiple pool members exist on the same backend server* Multiple virtual servers reference the same backend serversWhy the other options are incorrect:* B. Predictive (member)Predictive algorithms are advanced and traffic-pattern based, but they operate at the member level and do not guarantee equal connections per server.* C. Least Connections (member)This balances connections per pool member, which can overload a server hosting multiple members while still appearing \"balanced\" per member.* D. Predictive (node)Although node-aware, predictive algorithms are less deterministic and not the best choice when strict equality of connections is required.Correct Resolution:Using Least Connections (node) ensures that each backend server carries an equal connection load across all services and pools."
    },
    {
        text: "Due to a change in application requirements, a BIG-IP Administrator needs to modify the configuration of a Virtual Server to include a Fallback Persistence Profile.Which persistence profile type should the BIG-IP Administrator use?",
        options: [
            "SSL",
            "Hash",
            "Universal",
            "Source Address Affinity"
        ],
        correctIndexes: [3],
        explanation: "Fallback persistence is used when the primary persistence method fails. Source Address Affinity is a Layer 4 persistence method and is fully supported as a fallback option for most virtual server types."
    },
    {
        text: "Which type of Virtual Server requires the use of a FastL4 profile?",
        options: [
            "Performance (HTTP)",
            "Standard",
            "Performance (Layer 4)",
            "Stateless"
        ],
        correctIndexes: [2],
        explanation: ""
    },
    {
        text: "Refer to the exhibit. A BIG-IP Administrator creates a new Virtual Server to load balance SSH traffic. Users are unable to log on to the servers.What should the BIG-IP Administrator do to resolve the issue? (Choose one answer)",
        image: "q27.png",
        options: [
            "Set Protocol to UDP",
            "Set Source Address to 10.1.1.2",
            "Set Destination Address/Mask to 0.0.0.0/0",
            "Set HTTP Profile to None"
        ],
        correctIndexes: [3],
        explanation: "SSH is a Layer 4 TCP-based protocol that operates on TCP port 22 and does not use HTTP in any capacity. In the exhibit, the Virtual Server is configured with an HTTP Profile applied, which is inappropriate for SSH traffic and causes connection failures.According to the BIG-IP Administration: Data Plane Configuration documentation:* An HTTP profile must only be applied to Virtual Servers handling HTTP or HTTPS traffic.* When an HTTP profile is attached, BIG-IP expects HTTP headers and attempts to parse application- layer data.* Non-HTTP protocols such as SSH, FTP (control), SMTP, and other raw TCP services will fail if an HTTP profile is enabled.Why the other options are incorrect:* A. Set Protocol to UDPSSH uses TCP, not UDP. Changing the protocol would break SSH entirely.* B. Set Source Address to 10.1.1.2The source address setting controls client access restrictions and is unrelated to protocol parsing issues.* C. Set Destination Address/Mask to 0.0.0.0/0The destination address is already valid for a specific SSH service and does not impact protocol handling.Correct Resolution:The BIG-IP Administrator should remove the HTTP Profile (set it to None) so the Virtual Server functions as a pure Layer 4 TCP service, allowing SSH connections to pass through successfully."
    },
    {
        text: "A node is a member of multiple pools and hosts different applications. If one application becomes unavailable, only that pool member should be marked down.What should the BIG-IP Administrator deploy?",
        options: [
            "UDP monitor",
            "ICMP + TCP monitor",
            "HTTP monitor with custom send/receive",
            "TCP monitor"
        ],
        correctIndexes: [2],
        explanation: "Application-level monitors ensure that only the affected service is marked down, not the entire node."
    },
    {
        text: "Which persistence profile would be the most appropriate to ensure an HTTP web request connects to the same pool member? (Choose one answer)",
        options: [
            "Destination address",
            "Hash persistence",
            "SSL persistence",
            "Cookie persistence"
        ],
        correctIndexes: [3],
        explanation: "For HTTP-based applications, cookie persistence is the most appropriate and commonly recommended persistence method.According to the BIG-IP Administration: Data Plane Configuration documentation:* Cookie persistence inserts or uses an HTTP cookie to maintain session affinity.* It operates at Layer 7 (HTTP) and is application-aware.* It allows persistence to be maintained even when multiple clients are behind a NAT device.Why the other options are incorrect:* A. Destination addressDestination address persistence is generally used for inbound traffic patterns such as firewall or proxy scenarios.* B. Hash persistenceHash persistence is less granular and not HTTP-specific.* C. SSL persistenceSSL persistence is typically used when SSL session IDs are reused and is less reliable than cookies for HTTP applications.Correct Resolution:Using cookie persistence ensures that HTTP web requests are consistently directed to the same pool member."
    },
    {
        text: "A Virtual Server uses an iRule to send traffic to pool members depending on the URI. The BIG-IP Administrator needs to modify the pool member in the iRule.Which event declaration does the BIG-IP Administrator need to change to accomplish this?",
        options: [
            "CLIENT_ACCEPTED",
            "HTTP_RESPONSE",
            "HTTP_REQUEST",
            "SERVER_CONNECTED"
        ],
        correctIndexes: [2],
        explanation: "URI-based traffic steering requires inspection of the HTTP request. BIG-IP processes HTTP headers and URIs in the HTTP_REQUEST event. Pool member selection based on URI must occur before the request is sent to the server, making HTTP_REQUEST the correct event."
    }
]);