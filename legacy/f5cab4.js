window.loadExamData([
    {
        text: "A user needs to generate a QKView to upload to iHealth to determine any issues with upgrading TMOS.Where can the user generate the QKView in the Configuration Utility?",
        options: [
            "System > Software Management",
            "System > Archives",
            "System > Configuration",
            "System > Support"
        ],
        correctIndexes: [3],
        explanation: `Generating a QKView is a standard procedure for identifying device health and upgrade readiness.<br><br>Within the Configuration Utility, this Control Plane diagnostic tool is located under <b>System > Support</b>.<br><br>This utility collects configuration and state data into a single file used by the iHealth 'Upgrade Advisor' to report on known bugs or compatibility issues prior to a version change.`
    },
    {
        text: "A BIG-IP Administrator makes a configuration change to the BIG-IP device. Which file logs the message regarding the configuration change?",
        options: [
            "/var/log/messages",
            "/var/log/audit",
            "/var/log/user.log",
            "/var/log/secure"
        ],
        correctIndexes: [1],
        explanation: `Audit logging is a specialized feature within TMOS designed to track administrative actions.<br><br>According to F5 documentation, whenever a system object (like a virtual server, pool, or profile) is created, modified, or deleted, the system records the event.<br><br>These logs are stored specifically in <code>/var/log/audit</code>. This is essential for control plane administration to track "who did what and when" regarding the device configuration.`
    },
    {
        text: "A BIG-IP Administrator discovers malicious brute-force attempts to access the BIG-IP device on the management interface via SSH. The BIG-IP Administrator needs to restrict SSH access to the management interface. Where should this be accomplished?",
        options: [
            "System > Configuration",
            "Network > Interfaces",
            "Network > Self IPs",
            "System > Platform"
        ],
        correctIndexes: [3],
        explanation: `The "Management Port" is distinct from TMM data ports.<br><br>Configuration for global platform-level settings, including administrative access restrictions (IP Allow lists for SSH and HTTPS) for the management port, is found under <b>System > Platform</b>.<br><br>This is a critical Control Plane hardening step to prevent unauthorized remote access.`
    },
    {
        text: "The BIG-IP system is provisioned for LTM only. The BIG-IP Administrator is tasked with provisioning ASM.What process restarts when the BIG-IP Administrator changes the module provisioning? (Choose one answer)",
        options: [
            "bd",
            "tmm",
            "sshd",
            "httpd"
        ],
        correctIndexes: [1],
        explanation: `When a BIG-IP Administrator changes module provisioning (for example, enabling ASM on a system previously provisioned only for LTM), the BIG-IP system must restart the Traffic Management Microkernel (TMM) process.<br><br>The TMM process is responsible for:
<ul>
  <li>Traffic handling</li>
  <li>LTM, ASM, and other traffic-processing modules</li>
  <li>Enforcing security and application policies</li>
</ul>
Provisioning changes affect how traffic modules are loaded and integrated into TMM. As a result, TMM is restarted, which causes a temporary interruption of traffic processing. This is expected behavior and is why module provisioning changes should be planned during a maintenance window.<br><br><b>Why the other options are incorrect:</b>
<ul>
  <li><b>A.</b> bd is related to blade/platform management, not module provisioning.</li>
  <li><b>C.</b> sshd handles SSH access and is not affected by provisioning changes.</li>
  <li><b>D.</b> httpd supports the Configuration Utility (GUI) and does not restart due to module provisioning.</li>
</ul>
Therefore, the correct answer is B. tmm.`
    },
    {
        text: "Refer to the exhibit. The BIG-IP Administrator is investigating disk utilization on the BIG-IP device. What should the BIG-IP Administrator check next? (Choose one answer)",
        image: "q5.png",
        options: [
            "Results from the platform diagnostics test",
            "Results from the EUD test",
            "Large files on the / file system",
            "Large files on /usr file system"
        ],
        correctIndexes: [2],
        explanation: `When troubleshooting a BIG-IP system where a partition is reported as full (100% utilization), identifying and removing large or unnecessary files is the immediate next step for restoration of system stability.
<ul>
  <li><b>Symptoms of Full Partitions:</b> If a file system (such as the root / or /var) becomes full, it can result in unpredictable system behavior, failure to save configurations, and the inability to log in to the Web UI.</li>
  <li><b>The Root (/) Partition:</b> This partition is intentionally kept small on F5 systems. It is highly sensitive to the storage of third-party software or diagnostic files that should ideally be stored in the /shared or /var directories.</li>
  <li><b>Procedural Resolution:</b> To resolve 100% disk usage, administrators should check for large files on the affected partition using CLI commands like <code>du -ah</code> or <code>find / -xdev -type f -exec du {} \\; | sort -rn | head -20</code>.</li>
  <li><b>Common Culprits:</b> Large files typically causing these issues include old core files, tech support bundles, large diagnostic logs (packet diags), or temporary files created during administrative tasks.</li>
  <li><b>Diagnostics vs. Remediation:</b> While tests like the EUD (End User Diagnostics) or platform diagnostics are useful for hardware verification, they do not resolve file system exhaustion issues that have already reached a critical 100% state.</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator runs the initial configuration wizard and learns that the NTP servers were invalid.In which area of the Configuration Utility should the BIG-IP Administrator update the list of configured NTP servers? (Choose one answer)",
        options: [
            "System > Platform",
            "System > Preferences",
            "System > Services",
            "System > Configuration"
        ],
        correctIndexes: [3],
        explanation: `On a BIG-IP system, NTP (Network Time Protocol) configuration is part of the system-level configuration settings. In the Configuration Utility, NTP servers are configured under the System configuration hierarchy.<br><br>The correct navigation path is: <b>System > Configuration > Device > NTP</b><br><br>This location allows the administrator to:
<ul>
  <li>Add, modify, or remove NTP servers</li>
  <li>Ensure accurate system time synchronization</li>
  <li>Maintain proper time alignment required for features such as ConfigSync, HA failover, logging, and certificate validation</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A.</b> System > Platform is used for hardware-related settings.</li>
  <li><b>B.</b> System > Preferences manages UI and user preferences.</li>
  <li><b>C.</b> System > Services controls system daemons and services, not time configuration.</li>
</ul>
Therefore, the correct answer is D. System > Configuration.`
    },
    {
        text: "A BIG-IP Administrator needs to check the memory utilization on a BIG-IP system. Which two methods can the BIG-IP Administrator use? (Choose two.)",
        options: [
            "Run the tmsh show /sys memory command",
            "Run the tmsh show /sys traffic command",
            "Go to Statistics > Module Statistics > Traffic Summary in the configuration utility",
            "Go to Statistics > Module Statistics > Memory in the configuration utility"
        ],
        correctIndexes: [0, 3],
        explanation: `Reporting device status includes monitoring physical resource exhaustion, such as memory.<br><br>The Control Plane provides both a command-line method via TMSH (<code>show /sys memory</code>) and a graphical method under <b>Statistics > Module Statistics > Memory</b> to report on how memory is allocated across TMM and the Linux host.<br><br>This is essential for identifying potential "Aggressive Mode" triggers or hardware performance bottlenecks.`
    },
    {
        text: "A BIG-IP Administrator reviews the Plane CPU Usage performance chart and discovers a high percentage of Control Plane utilization. Which type of traffic does this indicate a higher usage of?",
        options: [
            "Administrative",
            "Tunnel",
            "Accelerated",
            "Application"
        ],
        correctIndexes: [0],
        explanation: `F5 architecture distinguishes between the Data Plane (TMM processing application traffic) and the Control Plane (Linux host processing management tasks).<br><br>High Control Plane CPU utilization typically points to administrative activities such as heavy GUI usage, complex API calls (iControl), large-scale configuration synchronizations, or intensive logging/monitoring tasks rather than the actual switching or load balancing of application data.`
    },
    {
        text: "The BIG-IP Administrator has modified an iRule on one device of an HA pair. The BIG-IP Administrator notices there is NO traffic on the BIG-IP device in which they are logged into. What should the BIG-IP Administrator do to verify if the iRule works correctly?",
        options: [
            "Push configuration from this device to the group and start to monitor traffic on this device",
            "Pull configuration to this device to the cluster and start to monitor traffic on this device",
            "Log in to the other device in the cluster, push configuration from it, and start to monitor traffic on that device",
            "Log in to the other device in the cluster, pull configuration to it, and start to monitor traffic on that device"
        ],
        correctIndexes: [3],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>In an Active/Standby HA pair, application traffic only flows through the Active device.<br><br>If an administrator makes a change on the Standby device (which has no traffic), they must synchronize the configuration to the Active device to test it.<br><br>The procedural step is to log into the Active device and "pull" the configuration from the Standby device (or push from Standby) so the Active device can process traffic using the new iRule.`
    },
    {
        text: "A BIG-IP Administrator must determine if a Virtual Address is configured to fail over to the standby member of a device group. In which area of the Configuration Utility can this be confirmed?",
        options: [
            "Device Management > Traffic Groups",
            "Device Management > Devices",
            "Local Traffic > Virtual Servers",
            "Device Management > Overview"
        ],
        correctIndexes: [2],
        explanation: `To report the current status of high availability for specific traffic, an administrator must verify the Traffic Group association.<br><br>In the Configuration Utility, Virtual Server properties include the Virtual Address settings where the 'Traffic Group' is assigned.<br><br>If the Virtual Address is assigned to a floating traffic group (like traffic-group-1), it is configured to fail over to the standby member.`
    },
    {
        text: "A BIG-IP Administrator needs to find which modules have been licensed for use on the BIG-IP system. In which section of the Configuration Utility can the BIG-IP Administrator find this information?",
        options: [
            "System > Services",
            "System > Resource Provisioning",
            "System > Platform",
            "System > Support"
        ],
        correctIndexes: [1],
        explanation: `Identifying the current device status includes knowing which software modules (such as LTM, ASM, or APM) are active and how much hardware resource (CPU/Memory) is allocated to them.<br><br>The <b>System > Resource Provisioning</b> screen displays the licensing status and allows the administrator to set the provisioning level (Nominal, Dedicated, or Minimum) for each module.`
    },
    {
        text: "Which log file should the BIG-IP Administrator check to determine if a specific user tried to log in to the BIG-IP Configuration Utility? (Choose one answer)",
        options: [
            "/var/log/pam/tallylog",
            "/var/log/secure",
            "/var/log/ltm",
            "/var/log/httpd"
        ],
        correctIndexes: [1],
        explanation: `On BIG-IP systems, all authentication attempts for administrative access-including logins to the Configuration Utility (GUI)-are logged in <code>/var/log/secure</code>.<br><br>This log file records:
<ul>
  <li>Successful and failed login attempts</li>
  <li>The username used</li>
  <li>The authentication method (local, LDAP, RADIUS, etc.)</li>
  <li>Access denials and PAM authentication errors</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><code>/var/log/pam/tallylog</code> tracks account lockouts and failed attempt counters, not detailed login attempts.</li>
  <li><code>/var/log/ltm</code> logs traffic management events, not administrative authentication.</li>
  <li><code>/var/log/httpd</code> logs web server activity but does not record authentication success or failure for BIG-IP administrative users.</li>
</ul>
Therefore, the correct log file to verify whether a user attempted to log in to the BIG-IP Configuration Utility is <code>/var/log/secure</code>.`
    },
    {
        text: "A BIG-IP Administrator needs to verify system time synchronization. Where should this be checked?",
        options: [
            "System > Platform",
            "System > Configuration > Device",
            "System > Logs",
            "System > Software Management"
        ],
        correctIndexes: [1],
        explanation: `Time synchronization is a critical component of Control Plane management, as it ensures that logs are accurately timestamped and that High Availability (HA) trust relationships remain valid.
<ul>
  <li><b>Configuration Location:</b> The list of configured NTP (Network Time Protocol) servers and their status is managed under <b>System > Configuration > Device > NTP</b>.</li>
  <li><b>Procedural Importance:</b> If the system clock drifts significantly between two devices in an HA pair, the Control Plane may experience a "Time Delta" error. This drift often causes a failure in device trust, preventing the ConfigSync process from functioning correctly.</li>
  <li><b>System Integrity:</b> Accurate time is also essential for the validity of SSL/TLS certificates used for both administrative management access and high availability communication.</li>
  <li><b>Verification:</b> Administrators can use this section of the Configuration Utility to confirm that the BIG-IP is communicating with its designated upstream time sources and that the local clock is correctly synchronized to the network environment.</li>
</ul>`
    },
    {
        text: "Refer to the exhibit. The BIG-IP Administrator runs the command shown and observes a device trust issue between BIG-IP devices in a device group. The issue prevents config sync on device bigip3.local. What is preventing the config sync?",
        image: "q14.png",
        options: [
            "Next Active Load factor is 0 on bigip1.local",
            "Both devices are standby",
            "Next Active Load factor is 1 on bigip1.local",
            "Time Delta to local system is"
        ],
        correctIndexes: [3],
        explanation: `Maintaining an accurate and synchronized clock across all members of a device group is a fundamental requirement for the BIG-IP Control Plane to establish and maintain device trust.
<ul>
  <li><b>Time Delta Impact:</b> As shown in the exhibit, the "Time Delta to Local Device (sec)" is 12.</li>
  <li><b>Trust Mechanism:</b> Device trust relies on secure certificate-based communication (SSL/TLS). If the time difference between devices is too large (typically more than a few seconds), the Control Plane cannot validate the certificates, leading to a failure in the trust relationship.</li>
  <li><b>ConfigSync Failure:</b> When device trust is broken due to time drift, the systems cannot verify the identity of the peer, which directly prevents the ConfigSync process from executing on the affected device, such as bigip3.local in this scenario.</li>
  <li><b>Resolution:</b> Administrators must ensure that all devices in a high availability pair are configured to use the same reliable NTP servers to keep their system clocks aligned.</li>
</ul>
The correct command for restoring an encrypted UCS archive via the command line is D. <code>load /sys ucs &lt;filepath&gt; passphrase &lt;password&gt;</code>.`
    },
    {
        text: "Which file should the BIG-IP Administrator check to determine when a Virtual Server changed its status?",
        options: [
            "/var/log/audit",
            "/var/log/lastlog",
            "/var/log/ltm",
            "/var/log/monitors"
        ],
        correctIndexes: [2],
        explanation: `Monitoring and reporting current device status involves tracking the health of traffic objects like Virtual Servers.<br><br>The Control Plane logs transition events-such as a Virtual Server moving from 'Available' (green) to 'Offline' (red) due to health monitor failures-in the <code>/var/log/ltm</code> file.<br><br>While the audit log tracks who changed a configuration, the LTM log tracks system-initiated status changes.`
    },
    {
        text: "A BIG-IP Administrator needs to restore a UCS file to an F5 device using the Configuration Utility.Which section of the Configuration Utility should the BIG-IP Administrator access to perform this task?(Choose one answer)",
        options: [
            "System > Configuration",
            "System > Archives",
            "Local Traffic > Virtual Servers",
            "Local Traffic > Policies"
        ],
        correctIndexes: [1],
        explanation: `In the BIG-IP Configuration Utility, all system backup and restore operations-including UCS (User Configuration Set) file restoration-are performed from the Archives section.<br><br>The correct navigation path is: <b>System > Archives</b><br><br>From this location, the administrator can:
<ul>
  <li>Upload UCS files</li>
  <li>Restore UCS backups</li>
  <li>Manage system archive files used for backup and recovery</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A.</b> System > Configuration is used for general system settings, not backup restoration.</li>
  <li><b>C.</b> Local Traffic > Virtual Servers is used for application traffic objects.</li>
  <li><b>D.</b> Local Traffic > Policies manages traffic policies, not system backups.</li>
</ul>
Therefore, the correct section to restore a UCS file using the Configuration Utility is System > Archives.`
    },
    {
        text: "Which command will provide the BIG-IP Administrator with the current device HA status? (Choose one answer)",
        options: [
            "list /cm failover",
            "show /sys failover",
            "show /cm failover-status"
        ],
        correctIndexes: [2],
        explanation: `To determine the current failover (HA) status of a BIG-IP system using tmsh, F5 documentation explicitly states that the administrator should use the following command:<br><br><code>show /cm failover-status</code><br><br>This command displays:
<ul>
  <li>The current failover state (active, standby, or offline)</li>
  <li>Detailed failover status information</li>
  <li>The operational HA condition of the device within a device group</li>
</ul>
According to F5 Knowledge Base Article K08452454, the documented procedure for checking failover status is:
<ul>
  <li>Log in to the TMOS Shell (tmsh)</li>
  <li>Run <code>show /cm failover-status</code></li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A).</b> <code>list /cm failover</code> shows configuration settings, not operational HA status.</li>
  <li><b>B).</b> <code>show /sys failover</code> is not the documented command for checking current failover status and does not align with F5's recommended procedure.</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator is unable to connect to the management interface via HTTPS. What is a possible reason for this issue?",
        options: [
            "The port lockdown setting is configured to Allow None.",
            "An incorrect management route is specified.",
            "The IP address of the device used to access the management interface is NOT included in the \"P Allow\" list in the Configuration Utility.",
            "The IP address of the device used to access the management interface is NOT included in the \"httpd Allow\" list in the CLI."
        ],
        correctIndexes: [3],
        explanation: `Management connectivity is protected by an allowed access list for the httpd daemon.<br><br>Unlike TMM data ports which use 'Port Lockdown' settings, the management port's access is controlled by a specific 'Allow' list.<br><br>If an administrator's IP is not explicitly included in this list, the Control Plane will reject HTTPS connection attempts to the management utility.`
    },
    {
        text: "When looking at this BIG-IP prompt: root@virtual-bigip1] Peer Time Out of Sync What does the message indicate? (Choose one answer)",
        options: [
            "That one of the NTP sources has a skewed clock",
            "That the peer BIG-IP is unreachable for the device group",
            "That the local time is correct, but the remote time is incorrect",
            "That there was a time synchronization issue between the BIG-IP device and its peer"
        ],
        correctIndexes: [3],
        explanation: `On BIG-IP systems that participate in a Device Service Cluster (DSC), each device compares the remote device's system time to its own system time.<br><br>If the difference is outside the ConfigSync time threshold (commonly referenced as 3 seconds by default), BIG-IP updates the shell prompt to show "Peer Time Out of Sync", and ConfigSync operations may fail until time is corrected (typically by fixing NTP reachability/configuration, or in some cases adjusting the threshold).<br><br>This message is specifically about time drift between peers in the trust domain/DSC-not basic reachability (so B is not what it means), and it does not prove which side is "correct" (so C is too specific). It also doesn't directly mean an NTP source is "skewed" (A can be a cause, but the prompt message itself indicates the peer-to-peer time mismatch condition).`
    },
    {
        text: "As an organization grows, more people have to log into the BIG-IP. Instead of adding more local users, the BIG-IP Administrator is asked to configure remote authentication against a central authentication server.Which two types of remote server can be used here? (Choose two answers)",
        options: [
            "LDAP",
            "OAUTH",
            "RADIUS",
            "SAML"
        ],
        correctIndexes: [0, 2],
        explanation: `BIG-IP supports remote authentication by integrating with centralized authentication services through its AAA framework.<br><br>The supported and commonly used remote authentication servers include:
<ul>
  <li><b>LDAP (A):</b> Used to authenticate users against directory services such as Active Directory or other LDAP-compliant directories.</li>
  <li><b>RADIUS (C):</b> Commonly used for centralized authentication, authorization, and accounting, especially in network and security environments.</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>OAUTH (B):</b> is an authorization framework, not supported as a direct administrative authentication backend for BIG-IP management access.</li>
  <li><b>SAML (D):</b> is primarily used for single sign-on (SSO) in application authentication scenarios, not for BIG-IP administrative login authentication.</li>
</ul>
Thus, the correct remote authentication server types are LDAP and RADIUS.`
    },
    {
        text: "A BIG-IP Administrator is setting up a new BIG-IP device. The network administrator reports that the interface has an incompatible media speed. The BIG-IP Administrator needs to change this setting manually.From which location should the BIG-IP Administrator perform this task?",
        options: [
            "On the Front Console",
            "In the TMOS Shell Command line",
            "In the Configuration Utility, Network > Interface",
            "In the Configuration Utility, System > Configuration"
        ],
        correctIndexes: [2],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>Connectivity management involves ensuring that the physical layer matches the networking environment.<br><br>Interface properties, including media speed, duplex settings, and MTU, are managed at the Control Plane level under the Network menu.<br><br>To resolve a mismatch with an upstream switch, the administrator must navigate to <b>Network > Interfaces</b> to manually override auto-negotiation settings.`
    },
    {
        text: "An organization is performing a major release upgrade to its BIG-IP system. The system is under medium load and has enough disk space to perform the upgrade.Which pre-upgrade task is disruptive to regular system performance and should be performed during a maintenance window? (Choose one answer)",
        options: [
            "Create a QKView",
            "Reactivate the license",
            "tmsh save sys config",
            "Generate a UCS"
        ],
        correctIndexes: [1],
        explanation: `Reactivating a BIG-IP license is a traffic-disruptive operation.<br><br>During the license reactivation process, the BIG-IP system performs a configuration reload, which results in a temporary interruption of all traffic processing. Because traffic handling is affected, F5 explicitly recommends scheduling license updates during a maintenance window.<br><br>This behavior is documented in F5 Knowledge Base articles, which state that license reactivation impacts traffic and must be planned accordingly during upgrades or system changes.<br><br><b>The other options are not considered disruptive:</b>
<ul>
  <li>Creating a QKView is primarily a diagnostic task and does not interrupt traffic.</li>
  <li>Running <code>tmsh save sys config</code> only saves the running configuration to disk.</li>
  <li>Generating a UCS is resource-intensive but does not reload configuration or interrupt traffic processing.</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator suspects that one of the BIG-IP device power supplies is experiencing power outages. Which log file should the BIG-IP Administrator check to verify the suspicion?",
        options: [
            "/var/log/daemon.log",
            "/var/log/kern.log",
            "/var/log/ltm",
            "/var/log/audit"
        ],
        correctIndexes: [2],
        explanation: `Although <code>/var/log/ltm</code> is primarily associated with Local Traffic Manager events, it is also the primary destination for system-level alerts generated by the Control Plane's chmand (Chassis Manager Daemon).<br><br>Hardware status changes, including power supply failures, fan speeds, and temperature warnings, are logged as "notice" or "critical" events within the LTM log file.`
    },
    {
        text: "A node is a member of various pools and hosts different web applications. If a web application is unavailable, the BIG-IP appliance needs to mark the pool member down for that application pool. What should a BIG-IP Administrator deploy at the pool level to accomplish this?",
        options: [
            "A combination of ICMP + TCP monitor",
            "A TCP monitor with a custom interval/timeout",
            "A UDP monitor with a custom interval/timeout",
            "An HTTP monitor with custom send/receive strings"
        ],
        correctIndexes: [3],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>To accurately report the current status of specific web applications hosted on the same server (node), the Control Plane must use a monitor that operates at the application layer.
<ul>
  <li><b>Application-Specific Monitoring:</b> While a node (the IP address) might be up and responding to ICMP (ping) or TCP handshakes, a specific web service or path on that server could be failing.</li>
  <li><b>Custom Send Strings:</b> An HTTP monitor allows the administrator to define a "Send String" to request a specific page or URI related to the application in that pool.</li>
  <li><b>Receive Strings:</b> The "Receive String" identifies a unique value that the application must return to be considered "Available".</li>
  <li><b>Granular Status Reporting:</b> By deploying these monitors at the pool level, the Control Plane can mark a pool member "Offline" for one application pool if the receive string is missing, while keeping it "Available" in another pool where the service is still healthy.</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator needs to change the management IP address of a BIG-IP device. Where should the administrator perform this task?",
        options: [
            "Network > VLANs",
            "Network > Interfaces",
            "System > Platform",
            "Network > Self IPs"
        ],
        correctIndexes: [2],
        explanation: `Management of the device's identity and primary out-of-band connectivity is a central Control Plane responsibility.
<ul>
  <li><b>Platform Settings:</b> The System > Platform section of the Configuration Utility is used to manage global hardware and system parameters, including the hostname, management IP address, and time zone.</li>
  <li><b>Management vs. Data Plane:</b> It is critical to distinguish between the management interface and TMM data interfaces. While data plane IPs (Self IPs) are configured under Network > Self IPs, the dedicated management port settings are grouped with other platform-level configurations.</li>
  <li><b>Access Control:</b> This area is also used to manage administrative security, such as restricting SSH or HTTPS access to specific management subnets or IP addresses.</li>
  <li><b>Impact of Change:</b> Changing the management IP will immediately disconnect any active GUI or SSH sessions using the current management IP. The administrator must reconnect using the newly assigned address.</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator uses a device group to share the workload and needs to perform service on a BIG-IP device currently active for a traffic group. The administrator needs to enable the traffic group to run on another BIG-IP device in the device group.What should the administrator do to meet the requirement? (Choose one answer)",
        options: [
            "Create a new Traffic Group and then fail to Standby Unit",
            "Select Traffic Group and then select Failover",
            "Select Traffic Group and then select Force to Standby",
            "Select Traffic Group on Primary Unit and then select Demote"
        ],
        correctIndexes: [1],
        explanation: `Traffic Groups are the mechanism BIG-IP uses to control which device owns specific application traffic in a high-availability (HA) configuration.<br><br>When maintenance is required on a device that is currently active for a traffic group, the correct and recommended action is to fail over that traffic group to another device in the device group.
<ul>
  <li>Failing over the traffic group moves ownership of that traffic group (and the virtual servers associated with it) to another available device without forcing the entire device into standby.</li>
  <li>This allows targeted maintenance while minimizing impact to other traffic groups that may still be active on the device.</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A</b> is unnecessary and incorrect; traffic groups are not recreated for routine maintenance.</li>
  <li><b>C</b> forces the entire device to standby, which may move more traffic than intended.</li>
  <li><b>D</b> (Demote) affects device trust/priority behavior and is not the standard or recommended method for moving traffic group ownership.</li>
</ul>
Therefore, selecting the Traffic Group and choosing Failover is the correct solution.`
    },
    {
        text: "Users are unable to reach an application. The BIG-IP Administrator checks the Configuration Utility and observes that the Virtual Server has a red diamond in front of the status.What is causing this issue? (Choose one answer)",
        options: [
            "The Virtual Server is receiving HTTPS traffic over an HTTP virtual",
            "All pool members are down",
            "All pool members have been disabled",
            "The Virtual Server is disabled"
        ],
        correctIndexes: [3],
        explanation: `In the BIG-IP Configuration Utility, status icons provide immediate health information. A <b>red diamond</b> specifically indicates that the object itself is administratively disabled.<br><br>When a virtual server is disabled, BIG-IP will not accept or process traffic for that virtual server, regardless of pool or node state.
<ul>
  <li>If all pool members were down, the virtual server would typically show a yellow triangle (available but no resources).</li>
  <li>If all pool members were disabled, the virtual server would usually still be enabled but unavailable due to pool status, not shown as a red diamond.</li>
  <li>Protocol mismatch (HTTPS sent to HTTP) does not change the administrative status icon of the virtual server.</li>
</ul>
Therefore, the red diamond clearly indicates the virtual server is disabled, making D the correct answer.`
    },
    {
        text: "A BIG-IP Administrator receives an RMA replacement for a failed F5 device. The Administrator tries to restore a UCS taken from the previous device, but the restore fails. The following error appears in the /var/log/ltm:insufficient pool members. 01070608:3: License is not operational(expired, digital signature does not match contents)What should the BIG-IP Administrator do to avoid this error? (Choose one answer)",
        options: [
            "Remove the license information from the UCS archive",
            "Revoke the license prior to restoring",
            "Use the appropriate tmsh command with the no-license option",
            "Reactivate the license on the new device using the manual activation method"
        ],
        correctIndexes: [2],
        explanation: `When restoring a UCS file to replacement hardware (RMA device), the license from the original device is not valid on the new system.<br><br>If the UCS restore attempts to load the old license, BIG-IP reports license errors such as "License is not operational", which can prevent traffic objects (including pools and virtual servers) from loading correctly.<br><br>To avoid this issue, F5 documentation recommends restoring the UCS without the license, using the following command:<br><code>tmsh load /sys ucs &lt;ucs filename&gt; no-license</code><br><br>This approach:
<ul>
  <li>Restores all configuration objects (LTM, networking, certificates, keys, etc.)</li>
  <li>Excludes the invalid license tied to the old hardware</li>
  <li>Allows the administrator to activate a new license separately on the replacement device</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A. Remove the license information from the UCS archive:</b> Not supported or recommended; UCS files should not be manually modified.</li>
  <li><b>B. Revoke the license prior to restoring:</b> License revocation does not prevent the UCS from attempting to load license data.</li>
  <li><b>D. Reactivate the license on the new device using the manual activation method:</b> This must be done after restoring the UCS and does not prevent the restore failure itself.</li>
</ul>
Therefore, the correct and supported method to avoid this error is C.`
    },
    {
        text: "A BIG-IP Administrator is conducting maintenance on one BIG-IP appliance in an HA Pair. Why should the BIG-IP Administrator put the appliance into FORCED_OFFLINE state?",
        options: [
            "To preserve existing connections to Virtual Servers and reduce the CPU load",
            "To allow new connections to Virtual Servers and ensure the appliance becomes active",
            "To terminate connections to the management IP and decrease persistent connections",
            "To terminate existing connections to Virtual Servers and prevent the appliance from becoming active"
        ],
        correctIndexes: [3],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>Placing a device in the FORCED_OFFLINE state is a critical procedural concept for HA maintenance.<br><br>Unlike simply being 'Standby', the FORCED_OFFLINE state ensures that the Control Plane will not participate in failover selection, effectively preventing the device from becoming 'Active' even if the peer fails.<br><br>This state also allows the administrator to terminate existing connections to ensure no traffic is being processed during the maintenance window.`
    },
    {
        text: "A BIG-IP Administrator needs to load a UCS file but must exclude the license file.How should the administrator perform this task? (Choose one answer)",
        options: [
            "From the GUI, select the UCS file and click Restore",
            "From the CLI with command tmsh load /sys ucs <ucs filename>",
            "From the CLI with command tmsh load /sys ucs <ucs filename> no-license",
            "From the GUI, select the UCS file, uncheck the license box, and click Restore"
        ],
        correctIndexes: [2],
        explanation: `When restoring a User Configuration Set (UCS) file, BIG-IP allows administrators to selectively exclude the license during the restore process.<br><br>From the CLI, this is accomplished using the <code>no-license</code> option with the <code>tmsh load /sys ucs</code> command.<br><br>The command:<br><code>tmsh load /sys ucs &lt;ucs filename&gt; no-license</code><br><br>restores:
<ul>
  <li>System configuration</li>
  <li>Certificates and keys</li>
  <li>Device and traffic objects</li>
</ul>
while explicitly excluding the license file, which is required when:
<ul>
  <li>Migrating configurations between devices</li>
  <li>Restoring to hardware with a different license</li>
  <li>Avoiding license conflicts or overwrites</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>A</b> does not provide the option to exclude the license.</li>
  <li><b>B</b> restores the UCS including the license, which does not meet the requirement.</li>
  <li><b>D</b> is incorrect because the BIG-IP GUI does not provide a checkbox to exclude the license during UCS restore.</li>
</ul>
Therefore, the correct and supported method is C.`
    },
    {
        text: "A BIG-IP Administrator needs to update the list of configured NTP servers. In which area of the Configuration Utility should the BIG-IP Administrator perform this update?",
        options: [
            "System > Preferences",
            "System > Configuration",
            "System > Platform",
            "System > Services"
        ],
        correctIndexes: [1],
        explanation: `NTP (Network Time Protocol) is vital for management connectivity and HA state synchronization.<br><br>Correct time is required for log timestamping and device trust group communication.<br><br>To manage these settings, the administrator navigates to <b>System > Configuration</b>, where general system-level services like NTP and DNS are defined to ensure the Control Plane remains synchronized with the network environment.`
    },
    {
        text: "A BIG-IP Administrator needs to restore a UCS file to an F5 device using the Configuration Utility. Which section of the Configuration Utility should the BIG-IP Administrator access to perform this task?",
        options: [
            "Local Traffic > Virtual Servers",
            "Local Traffic > Policies",
            "System > Archives",
            "System > Configuration"
        ],
        correctIndexes: [2],
        explanation: `Managing the state of a device often involves restoring configuration backups known as User Configuration Set (UCS) files.<br><br>These archives contain the full system configuration, including licenses and SSL certificates.<br><br>The Control Plane provides a dedicated management area for these files under <b>System > Archives</b>, where administrators can upload, create, and restore configuration snapshots.`
    },
    {
        text: "A configuration change is made on the standby member of a device group. What is displayed as\"Recommended Action\" on the Device Management Overview screen?",
        options: [
            "Force active member of device group to standby",
            "Activate device with the most recent configuration",
            "Synchronize the active member configuration to the group.",
            "Synchronize the standby member configuration to the group"
        ],
        correctIndexes: [3],
        explanation: `The BIG-IP Control Plane monitors the "Commit ID" of the configuration on all group members.<br><br>When a change is made on the Standby unit, it becomes the member with the most recent configuration.<br><br>The "Recommended Action" in the HA status dashboard will be to synchronize that specific device's configuration to the rest of the group to ensure consistency.`
    },
    {
        text: "The BIG-IP Administrator suspects unauthorized SSH login attempts on the BIG-IP system.Which log file would contain details of these attempts? (Choose one answer)",
        options: [
            "/var/log/messages",
            "/var/log/secure",
            "/var/log/audit",
            "/var/log/ltm"
        ],
        correctIndexes: [1],
        explanation: `On BIG-IP systems, authentication and authorization events are logged in <code>/var/log/secure</code>.<br><br>This includes:
<ul>
  <li>Successful and failed SSH login attempts</li>
  <li>Invalid user authentication attempts</li>
  <li>PAM (Pluggable Authentication Module) authentication failures</li>
  <li>Access denials related to secure services</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><code>/var/log/messages</code> contains general system messages and service events, not detailed authentication failures.</li>
  <li><code>/var/log/audit</code> records administrative configuration changes (who changed what and when), not login attempts.</li>
  <li><code>/var/log/ltm</code> logs traffic-management (TMM) and application-related events.</li>
</ul>
Therefore, the correct log file for investigating unauthorized SSH login attempts is <code>/var/log/secure</code>.`
    },
    {
        text: "The BIG-IP Administrator generates a qkview using \"qkview -s0\" and needs to transfer the output file via SCP. Which directory contains the output file?",
        options: [
            "/var/log",
            "/var/tmp",
            "/var/local",
            "/var/config"
        ],
        correctIndexes: [1],
        explanation: `A QKView is a comprehensive snapshot of the device's Control Plane state, configuration, and logs used for troubleshooting.<br><br>By default, the qkview utility stores its generated output file in the <code>/var/tmp/</code> directory.<br><br>Administrators must know this path to retrieve the file for upload to F5 iHealth or Support.`
    },
    {
        text: "A BIG-IP device sends out the following SNMP trap: big-ipo.f5.com - bigipExternalLinkChange Link: 1.0 is DOWN. Where in the BIG-IP Configuration utility should the BIG-IP Administrator verify the current status of Link 1.0?",
        options: [
            "Statistics > Performance > System",
            "System > Platform",
            "Network > Interfaces > Interface List",
            "Network > Trunks > Trunk List"
        ],
        correctIndexes: [2],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>Monitoring the physical status of the device is critical for reporting device health. In F5 nomenclature, "1.0", "1.1", etc., represent physical hardware interfaces.<br><br>To verify if a physical link is up or down as reported by the Control Plane's SNMP agent, the administrator must check the Interface List located under <b>Network > Interfaces</b>.`
    },
    {
        text: "A BIG-IP Administrator needs to view the CPU utilization of a particular Virtual Server. Which section of the Configuration Utility should the administrator use for this purpose?",
        options: [
            "Statistics > Module Statistics > Local Traffic > Virtual Addresses",
            "Statistics > Module Statistics > Traffic Summary",
            "Statistics > Analytics > Process CPU Utilization",
            "Statistics > Module Statistics > Local Traffic > Virtual Servers"
        ],
        correctIndexes: [3],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>Monitoring specific object health is a core function of the Control Plane.<br><br>While the dashboard provides a global overview, granular performance data-such as the CPU overhead a specific Virtual Server is placing on the Traffic Management Microkernel (TMM)-is found under the Module Statistics.<br><br>Navigating to <b>Statistics > Module Statistics > Local Traffic > Virtual Servers</b> allows an administrator to report on the current status and resource consumption of individual traffic objects.`
    },
    {
        text: "Administrative user accounts have been defined on the remote LDAP server and are unable to log in to the BIG-IP device. Which log file should the BIG-IP Administrator check to find the related messages?",
        options: [
            "/var/log/secure",
            "/var/log/messages",
            "/var/log/ltm",
            "/var/log/user.log"
        ],
        correctIndexes: [0],
        explanation: `<b>Comprehensive and Detailed Explanation From BIG-IP Administration Control Plane Administration documents:</b><br><br>Authentication and authorization events are handled by the system's PAM (Pluggable Authentication Modules).<br><br>For Control Plane security auditing, all login attempts-whether local or remote (LDAP/RADIUS/TACACS+)-and SSH-related security events are recorded in <code>/var/log/secure</code>.<br><br>This is the primary log for troubleshooting administrative access issues.`
    },
    {
        text: "An LTM device has a virtual server mapped to www.f5.com. Users report that when they connect to /resources/201.1.2h.l_l.com they are unable to receive content. What is the likely cause of the issue?",
        options: [
            "The pool associated with the virtual server does not have priority group activation enabled.",
            "The virtual address does not have ARP enabled.",
            "The virtual address does not have route advertising enabled.",
            "The pool associated with the virtual server is falling its health check."
        ],
        correctIndexes: [1],
        explanation: `The Control Plane is responsible for ARP (Address Resolution Protocol) management for Virtual Addresses.<br><br>For a Virtual Server to be reachable, the BIG-IP must respond to ARP requests for that IP.<br><br>If the "ARP" setting is disabled on the Virtual Address properties, upstream routers cannot resolve the MAC address of the BIG-IP, leading to connectivity failure even if the service itself is "Available."`
    },
    {
        text: "A BIG-IP Administrator needs to export system configuration for migration purposes. Which file type should be used?",
        options: [
            "SCF",
            "QKView",
            "UCS",
            "ISO"
        ],
        correctIndexes: [2],
        explanation: `In F5 TMOS, a User Configuration Set (UCS) is the standard archive format used for backing up and migrating a complete system configuration.<br><br>
<ul>
  <li><b>Composition:</b> A UCS file contains all necessary configuration data, including system-specific files, license information, SSL certificates, private keys, and local user accounts.</li>
  <li><b>Procedural Use:</b> When migrating to new hardware or performing an RMA replacement, the UCS file is the primary tool used to restore the entire Control Plane state to the new device.</li>
  <li><b>Restoration:</b> It can be managed through the Configuration Utility under System > Archives or via the CLI using the <code>tmsh load /sys ucs</code> command.</li>
</ul>
The correct location to restrict management access to specific subnets is System > Platform.`
    },
    {
        text: "A BIG-IP Administrator needs to determine who changed a Virtual Server configuration.In which log file would the BIG-IP Administrator find this data? (Choose one answer)",
        options: [
            "/var/log/audit",
            "/var/log/secure",
            "/var/log/ltm"
        ],
        correctIndexes: [0],
        explanation: `The audit log (<code>/var/log/audit</code>) records configuration changes made on the BIG-IP system, including:
<ul>
  <li>Who made the change (user account)</li>
  <li>What was changed (for example, a virtual server modification)</li>
  <li>When the change occurred</li>
  <li>How it was performed (GUI, TMSH, or API)</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><code>/var/log/secure</code> logs authentication events such as login successes and failures, not configuration changes.</li>
  <li><code>/var/log/ltm</code> logs traffic-management and runtime LTM events, not administrative configuration modifications.</li>
</ul>
Therefore, the correct log file for tracking who changed a virtual server is <code>/var/log/audit</code>.`
    },
    {
        text: "What are the recommended methods for forcing a BIG-IP system to standby mode? (Choose two answers)",
        options: [
            "Active BIG-IP: CLI > tmsh run /sys failover device standby",
            "Active BIG-IP: Configuration Utility > Device Management > Devices > Local Device (Self) > Force to Standby",
            "Active BIG-IP: Configuration Utility > Device Management > Traffic Groups > Local Device (Self) > Force to Standby",
            "Active BIG-IP: CLI > tmsh run /sys failover standby"
        ],
        correctIndexes: [0, 1],
        explanation: `BIG-IP provides two supported and documented methods to manually force a device into standby state in a high-availability (HA) configuration:<br><br>
<ul>
  <li><b>CLI method (A):</b> <code>tmsh run /sys failover device standby</code>. This is the correct and supported TMSH command to force the local device to transition from active to standby.</li>
  <li><b>Configuration Utility method (B):</b> Navigating to <b>Device Management > Devices > Local Device (Self)</b> and selecting <b>Force to Standby</b> performs the same operation through the GUI and is fully supported.</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><b>C</b> is incorrect: Traffic Groups do not provide a "Force to Standby" option for the local device; traffic groups are used to manage which device owns specific traffic, not to force device-level failover.</li>
  <li><b>D</b> is incorrect: <code>tmsh run /sys failover standby</code> is not a valid TMSH command. The correct syntax requires <code>device standby</code>.</li>
</ul>
Thus, the correct answers are A and B.`
    },
    {
        text: "Administrative user accounts have been defined on the remote LDAP server and are unable to log in to the BIG-IP device.Which log file should the BIG-IP Administrator check to find the related messages? (Choose one answer)",
        options: [
            "/var/log/user.log",
            "/var/log/ltm",
            "/var/log/messages",
            "/var/log/secure"
        ],
        correctIndexes: [3],
        explanation: `When BIG-IP is configured to use remote authentication (such as LDAP), all authentication and authorization attempts-including successes and failures-are logged to <code>/var/log/secure</code>.<br><br>For LDAP-based administrative login issues, <code>/var/log/secure</code> contains:
<ul>
  <li>LDAP authentication failures</li>
  <li>PAM authentication errors</li>
  <li>Authorization and access-denied messages</li>
  <li>Details explaining why a remote user could not log in</li>
</ul>
<b>Why the other options are incorrect:</b>
<ul>
  <li><code>/var/log/user.log</code> is not a standard BIG-IP log file for authentication.</li>
  <li><code>/var/log/ltm</code> logs traffic management events, not user authentication.</li>
  <li><code>/var/log/messages</code> contains general system messages but not detailed authentication failure information.</li>
</ul>
Therefore, the correct log file to troubleshoot LDAP administrative login failures is <code>/var/log/secure</code>.`
    },
    {
        text: `A BIG-IP administrator is troubleshooting inconsistent configuration objects on devices in a device group.

                The administrator uses the command: tmsh run /cm watch-devicegroup-device and observes the following output:

                devices <devgroup> device clu_id cl_orig cl_time last_sync
                20:21 sync_test bigip_a 3273 bigip_a 14:27:00
                20:21 sync_test bigip_b 1745 bigip_b 13:52:34 13:42:04
                20:21 sync_test bigip_c 1745 bigip_a 13:52:34 13:42:04`,

        options: [
            "bigip_a has the latest configuration.",
            "Two of the devices in the device group have a configuration that is out of date.",
            "The config from bigip_c was synced to the other devices in the device group during the most recent ConfigSync.",
            "The correct configuration exists on bigip_b and bigip_c because their cluster times match.",
            "The correct configuration exists on bigip_a and bigip_c because their cluster times match."
        ],
        correctIndexes: [0, 1],
        explanation: `<code>watch-devicegroup-device</code> shows (among other columns) the commit ID (<code>cid.id</code> / shown here as <code>clu_id</code>), the originating device for that commit (<code>cid-orig</code> / shown here as <code>cl_orig</code>), and the time the configuration change was made (<code>cid.time</code> / shown here as <code>cl_time</code>).<br><br>The highest/newest commit ID and its time represent the most recent configuration change seen among the devices.<br><br>
<ul>
  <li>bigip_a has the latest configuration (A) because it shows commit ID 3273 at 14:27:00, which is newer than commit ID 1745 at 13:52:34 on bigip_b and bigip_c.</li>
  <li>Two devices are out of date (B) because bigip_b and bigip_c are still on the older commit ID 1745, so they do not match the latest commit shown on bigip_a.</li>
</ul>
<b>Why the other options are not supported by this output:</b>
<ul>
  <li><b>C</b> is not supported: bigip_c is not showing a newer commit than the others; it's on the older commit (1745), so it's not the source of the most recent change. The output's <code>cid-orig</code> column is what tells you where the change was made.</li>
  <li><b>D/E</b> are incorrect logic: matching <code>cid.time</code> between two devices only indicates they share the same change timestamp/commit, not that it is the correct or latest configuration. The "latest" is indicated by the newest commit ID/time (here, bigip_a).</li>
</ul>`
    },
    {
        text: "A BIG-IP Administrator finds the following log entry: tnm tmm[7141]: 011e0002:4: sweeper_update:aggressive mode activated. Which action should the BIG-IP Administrator take to mitigate this memory issue?",
        options: [
            "Configure the redundant pair to be active-active",
            "Decrease the TCP profile Idle Timeout value",
            "Increase the TCP profile Idle Timeout value",
            "Configure the server to use Connection Mirroring"
        ],
        correctIndexes: [3],
        explanation: `This log message indicates that the system is low on memory and has activated 'Aggressive Mode' to reclaim resources by closing old connections.<br><br>In an HA environment, one way to ensure state stability during memory pressure is to manage how connection data is handled.<br><br>While the document suggests D, procedural mitigation for 'Aggressive Mode' often involves reviewing resource provisioning or optimizing connection idle timeouts to reduce memory footprint.`
    }
]);