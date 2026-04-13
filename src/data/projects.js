// src/data/projects.js

const projects = [
  {
    id: "lunar-hopper",
    title: "Lunar Hopper",
    description:
      "I worked on the electrical and embedded software side of an autonomous lunar hopper designed to navigate rugged terrain using IMU-based dead reckoning, sensor fusion, and low-power communication systems.",

    tech: [
      "Embedded C",
      "IMU",
      "Sensor Fusion",
      "Dead Reckoning",
      "Low-Power Firmware",
      "UHF Communications",
    ],

    image: "/lunar_hopper_homepic.png",
    link: "#",

    bullets: [
      "I contributed to the electrical and coding side of the project, with a focus on navigation, communication, and power-aware embedded system design.",
      "I worked around the idea of IMU-based dead reckoning so the hopper could estimate orientation, velocity, and position without GPS.",
      "I explored how sensor fusion and AI-assisted drift correction could improve localization accuracy over time.",
      "I helped think through low-power communication and subsystem throttling so the hopper could conserve energy while still relaying useful mission data.",
    ],

    overview:
      "Lunar Hopper was a concept developed for exploring difficult lunar terrain, especially regions near the moon’s south pole where steep crater walls, abrasive dust, and uneven surfaces make wheeled mobility difficult. Instead of relying on wheels, our system used a controlled hopping mechanism to move across the surface, scan terrain, collect subsurface data, and support resource-mapping objectives. What drew me to this project was how strongly it connected embedded systems, electrical design, controls, sensing, and autonomy into one mission-focused platform.",

    problem:
      "One of the biggest challenges in lunar exploration is mobility in extreme terrain. Traditional rovers can struggle with deep craters, loose regolith, and abrasive dust, and aerial systems require propellant that is too limited for long-term exploration. Our hopper concept approached that problem differently: by storing energy mechanically, releasing it in controlled jumps, and using onboard sensing and software to recover orientation, localize, and continue exploring. That meant the project was not only a mechanical challenge, but also an electrical and software systems challenge.",

    role:
      "My work focused on the part of the system shown in the diagram, the estimation and sensing pipeline. I worked on the electrical and software side, specifically thinking through how IMU and camera data could be fused to estimate the hopper’s motion state. This includes tracking orientation, angular velocity, and acceleration, then feeding that into a system that can continuously update the hopper’s understanding of where it is and how it is moving after each jump.",

    contributions: [
      {
        title: "Embedded Navigation Logic",
        text: "I focused on how the hopper could estimate its motion from onboard sensors alone. Since there is no GPS on the moon, the system needed to rely on IMU-based dead reckoning to update orientation, velocity, and position throughout each jump cycle.",
      },
      {
        title: "Sensor Fusion Thinking",
        text: "I worked around the concept of combining raw IMU data with a more intelligent correction layer so the hopper could reduce drift over time. I was especially interested in how a physics-based navigation model could work alongside AI-assisted drift correction to improve long-term localization performance.",
      },
      {
        title: "Low-Power Firmware Concepts",
        text: "I contributed to the idea of power-aware operation by thinking through how subsystems should only turn on when needed. For a mission with strict energy limits, that kind of selective activation matters a lot. Navigation, sensing, communications, and drilling all compete for power, so embedded control has to be intentional.",
      },
      {
        title: "Communications and System Coordination",
        text: "I also thought through how the hopper could relay information efficiently while staying within practical hardware and energy constraints. That included communication strategy, subsystem coordination, and how onboard computing would support mission decisions in a realistic embedded environment.",
      },
    ],

    electrical:
      "On the electrical side, I thought about the hopper as a tightly constrained embedded platform rather than just a robot with sensors attached. The IMU, cameras, communications hardware, onboard computer, and power delivery all had to support each other. I was interested in how the electronics would enable real autonomy: collecting motion data, supporting navigation updates, coordinating subsystem behavior, and maintaining efficient energy use across the hopper lifecycle.",

    software:
      "The control diagram above reflects how I thought about the hopper’s motion control. I explored how a PID-based control system could be used to adjust the hopper’s orientation and trajectory using feedback from sensors. The idea is that after each jump, the system compares its current state to a desired target and continuously corrects error using proportional, integral, and derivative terms. This kind of feedback control is critical for stabilizing the hopper and ensuring consistent movement across uneven terrain.",

    systemDesign:
      "The CAD views above show how all subsystems come together into a single physical design. What stood out to me is how tightly integrated everything is — the mechanical jumping system, the electronics, the sensors, and the onboard computing all share space and constraints. This pushed me to think about the system holistically, where every design decision affects something else. It reinforced the idea that embedded systems are not just about code or circuits, but about how everything fits together in a real-world device.",

    challenges: [
      "Designing navigation without GPS and relying on IMU-based estimation.",
      "Managing drift error over time while keeping localization useful.",
      "Balancing sensing, computation, and communication against strict power limits.",
      "Making embedded logic realistic for a robot operating in a harsh lunar environment.",
      "Thinking across multiple subsystems instead of treating software and electronics separately.",
    ],

    results:
      "This project helped me grow as an engineer by forcing me to think across electrical systems, embedded software, and autonomy all at once. I came away with a stronger understanding of how hard localization, communications, and power management become in real robotic systems, especially when external references and excess energy are removed. It also reinforced my interest in embedded systems and intelligent control for mission-critical platforms.",

    reflection:
      "Lunar Hopper represents the kind of engineering work I want to keep doing. I enjoy projects where hardware and software depend on each other closely, and where every design decision affects the behavior of the full system. Working on the electrical and coding side of this concept pushed me to think more like a systems engineer, and it made me even more interested in embedded controls, sensing, and autonomous robotics.",

    sectionImages: {
      overview: {
        src: "/lunar_hopper_goal.png",
        alt: "Lunar Hopper concept render",
        caption: "Concept render of the Lunar Hopper from the project proposal.",
      },
      problem: {
        src: "/lunar_hopper_lifecycle.png",
        alt: "Lunar Hopper lifecycle diagram",
        caption: "Lifecycle diagram showing how the hopper compresses, jumps, lands, reorients, and drills.",
      },
      role: {
        src: "/lunar_hopper_role.png",
        alt: "Lunar Hopper Calibration",
        caption: "My role and what I worked on",
      },
      software: {
        src: "/lunar_hopper_PID.png",
        alt: "Lunar Hopper navigation and operation flow",
        caption: "Worked on the embedded control and navigation flow from one jump to the next.",
      },
    
      systemDesign: {
        src: "/lunar_hopper_design.png",
        alt: "Lunar Hopper structure",
        caption: "The hopper design combined mechanical, electrical, and onboard computing subsystems into one platform.",
      },
      results: {
        src: "/lunar_hopper_schedule.png",
        alt: "Lunar Hopper mission schedule",
        caption: "Project development and mission schedule from the proposal.",
      },
    },
  },




  {
    id: "gait-walker",
    title: "Gait Walker",
    description:
      "I worked on the electrical sensing side of an assistive walker project, focusing on load testing, load-cell signal behavior, and LiDAR-related electrical integration for terrain awareness and safer user feedback.",

    tech: [
      "Load Cells",
      "LiDAR",
      "Circuit Design",
      "Sensor Testing",
      "Breadboarding",
      "Microcontrollers",
    ],

    image: "/gait_walker_homepic.png",
    link: "#",

    bullets: [
      "I focused on load testing and electrical sensing to better understand how force and terrain information could be measured and used in the walker system.",
      "I worked with load-cell hardware, amplification paths, and controller-side electrical integration to make sensor readings more meaningful and repeatable.",
      "I supported LiDAR-related electrical implementation for terrain and drop-off awareness, helping connect environmental sensing to the broader assistive system.",
      "I used hands-on prototyping and testing to evaluate signal behavior, wiring reliability, and how the electronics would perform outside of an ideal bench setup.",
    ],

    overview:
      "Gait Walker was an assistive mobility project centered on making walker use safer through sensing, electrical integration, and user-focused design. The broader idea behind smart walker systems is to detect hazards before a user fully commits their weight and movement forward. In the reference design, the final concept used two LiDAR sensors, an Arduino Nano, an audible feedback system, and a rechargeable battery-powered electronics package mounted to a walker. The system was built to detect sudden terrain drop-offs ahead of the user and provide enough warning distance to stop safely.",

    problem:
      "A conventional walker provides stability, but it does not actively sense hazards in front of the user. That becomes dangerous when a user approaches stairs, curbs, or sudden elevation changes that may not be easy to see. In the Smart Walker report, the project was motivated by a real fall caused by an unseen drop-off, and the team designed the system specifically to warn the user before the walker rolled into that hazard. The project also had practical constraints: it needed to be lightweight, low power, durable, transferable to different walkers, and able to operate for at least a full day.",

    role:
      "My role focused on the electrical sensing side of the project rather than the full walker platform. I concentrated on load testing, load-sensor behavior, and LiDAR-related electrical integration. A big part of my work was understanding how force and environmental sensing could be translated into usable electrical signals, then using testing to see how well those signals held up in a real prototype. I was especially interested in how the electronics could support safer walker behavior by combining physical load information with sensor-based awareness of the terrain ahead.",

    contributions: [
      {
        title: "Load Testing and Sensor Validation",
        text: "I spent much of my time on load testing to understand how the sensing hardware behaved under applied weight. That included looking at output behavior, comparing sensor response trends, and using testing to decide whether the signal path was stable enough to support useful interpretation. This work helped move the design from just being assembled to actually being measurable.",
      },
      {
        title: "Load-Cell Electrical Work",
        text: "I worked on the electrical path around the load cells, including how their small outputs would be amplified and routed into the controller. Because force sensors are sensitive to wiring, polarity, mounting, and noise, I focused on making the setup more repeatable and easier to troubleshoot during prototyping.",
      },
      {
        title: "LiDAR Integration Support",
        text: "I also supported the LiDAR-related electrical component of the project. In the Smart Walker reference design, the final architecture used two LiDAR sensors so the walker could better detect drop-offs even when approaching at an angle, with the sensors interfaced to the controller over I2C through a multiplexer. That sensor-side architecture aligned closely with the kind of terrain-awareness integration I was interested in on this project.",
      },
      {
        title: "Prototype Debugging",
        text: "Beyond building, I helped use experiments to diagnose what was actually happening in the hardware. I paid attention to how readings changed with physical setup, how wiring affected results, and how electrical organization influenced whether the system behaved consistently enough to be trusted.",
      },
    ],

    electrical:
      "The electrical side of this project was where most of my work lived. I focused on the sensor signal path: load cells feeding into amplification, then into the microcontroller for interpretation. On the environmental sensing side, the Smart Walker reference design used two LiDAR Lite sensors connected to an Arduino Nano, with SDA/SCL I2C communication and a PCA9544AD multiplexer so both sensors could be read reliably. The final reference prototype also used piezo speakers for feedback and a 13000 mAh rechargeable battery pack sized to exceed the system’s operating requirements.",

    design:
      "What I liked most about the design process was that it was driven by testing instead of assumption. In the reference project, the team determined a worst-case stopping distance of 3 feet 6 inches through repeated trials, then set a 4-foot warning distance to give the user extra margin. That same testing mindset was important in my work on the electrical side: I used measured behavior from the load sensors and prototype circuitry to understand what was realistic, not just what looked correct in theory. The physical layout of the load cells and the breadboarded electronics also made it possible to isolate problems one subsystem at a time.",

    challenges: [
      "Getting reliable load-sensor behavior from a prototype setup where wiring, polarity, and mounting all affected the readings.",
      "Working with very small sensor outputs that required amplification and careful electrical organization before they became useful.",
      "Bridging the gap between a sensor that responds on the bench and a sensing system that remains dependable when integrated into a walker.",
      "Thinking through environmental sensing and load sensing together instead of treating them as separate electrical problems.",
      "Designing around real user safety constraints, where warning distance, power budget, and mounting all matter as much as raw sensor performance.",
    ],

    results:
      "This project strengthened my ability to think like an electrical systems engineer. I learned that sensor integration is about validating whether the signals are trustworthy, repeatable, and useful in context. The Smart Walker reference team verified that their battery-backed LiDAR system could operate through a 16-hour day and built the design around a 4-foot alert distance, which reinforced how strongly practical performance targets should shape an assistive device. For me, the most valuable takeaway was learning how testing can guide electrical design decisions.",

    reflection:
      "Gait Walker pushed me toward the kind of work I enjoy most: hands-on electrical prototyping tied directly to a real human need. I liked that the project was not abstract. The sensor readings, wiring decisions, and test results all connected back to user safety. My biggest takeaway was that meaningful assistive technology depends on reliable sensing, and reliable sensing comes from careful testing. Working on load testing and LiDAR/electrical integration made me even more interested in embedded systems, sensor interfaces, and electronics that have a direct impact on how people move through the world.",

    sectionImages: {
      overview: {
        src: "/gait_walker_block_diagram.png",
        alt: "Gait Walker system block diagram",
        caption:
          "System-level view of the sensing and controller architecture behind the walker electronics.",
      },
      problem: {
        src: "/gait_walker_load_testing.png",
        alt: "Gait Walker load testing setup",
        caption:
          "Early test setup used to evaluate the sensing electronics under applied load conditions.",
      },
      role: {
        src: "/gait_walker_circuits.png",
        alt: "Gait Walker breadboarded sensing circuit",
        caption:
          "My work centered on the electrical sensing setup, including load-cell signal behavior and controller-side integration.",
      },
      electrical: {
        src: "/gait_walker_load_sensor_diagram.png",
        alt: "Load sensor output voltage versus applied weight",
        caption:
          "Load-sensor testing helped us see how output changed under weight and whether the signal path was usable.",
      },
      design: {
        src: "/gait_walker_loaded_cells.png",
        alt: "Load cell placement diagram",
        caption:
          "Load-cell placement and spacing were important for building a repeatable test platform.",
      },
      results: {
        src: "/gait_walker_poster.png",
        alt: "Gait Walker project image",
        caption:
          "The project combined assistive design goals with practical electrical sensing and prototype validation.",
      },
    },
  },





  {
    id: "Micromouse",
    title: "Micromouse",
    description:
      "I built and finished a fully autonomous micromouse robot that could sense walls, track motion with encoders, control its motors with feedback, and solve a maze using onboard path-planning logic.",

    tech: [
      "Raspberry Pi Pico",
      "C/C++",
      "Soldering",
      "DRV8833",
      "IR Sensors",
      "Encoders",
      "Odometry",
      "PID Control",
      "PWM",
      "Floodfill",
    ],

    image: "/micromouse_homepic.png",
    link: "#",

    bullets: [
      "I completed the full mouse build from PCB assembly to final maze-solving behavior.",
      "I soldered and integrated the robot hardware, including the control board, motors, sensors, and power components.",
      "I used encoder feedback and odometry to estimate wheel motion, displacement, and heading during navigation.",
      "I implemented and tuned motor control, PID-based correction, and maze-solving logic so the mouse could move reliably and finish the course project.",
    ],

    overview:
      "Micromouse was a semester-long robotics project centered on building a small autonomous robot that could navigate and solve a maze. The project developed in stages: first assembling the hardware, then bringing up sensing and motion, then using encoder data and IR measurements to control the mouse accurately, and finally building enough autonomy for the robot to explore and solve the maze. What made the project meaningful to me was that I worked through the entire system end to end instead of only one isolated part.",

    problem:
      "The challenge in micromouse is not just making a robot move. The mouse has to move precisely inside a tight maze, detect walls reliably, estimate how far it has traveled, keep itself straight even when the motors are imperfect, and eventually make navigation decisions based on what it has sensed. The course structure reflected that difficulty: assembly came first, then encoders and IR sensing, then odometry, motor control, PID, and finally maze-solving. Every stage depended on the earlier stages working well.",

    role:
      "I worked on and completed the full mouse. That included hardware assembly, soldering, electrical bring-up, motion testing, sensor integration, and the embedded programming needed to make the robot actually drive and solve the maze. Because I finished my mouse, my role was not limited to just building or just coding — I had to connect the hardware and software together into one working autonomous system.",

    contributions: [
      {
        title: "Full Hardware Assembly",
        text: "I assembled the mouse from the PCB up, including both surface-mount and through-hole components. That meant soldering the board carefully, placing components with the correct polarity, and making sure the physical robot was reliable before moving into software work.",
      },
      {
        title: "Encoder and Odometry Integration",
        text: "I used the motor encoders to measure wheel rotation and convert ticks into useful motion data. From that, I worked with odometry concepts to estimate displacement and heading, which is what allowed the mouse to move by measured distance instead of relying on guesswork.",
      },
      {
        title: "IR Sensing and Wall Detection",
        text: "I integrated the IR sensing side of the mouse so it could detect nearby walls and use that information during navigation. This required understanding how the sensor signals were converted into readable values and then using those readings in control logic.",
      },
      {
        title: "Motor Control and PID Tuning",
        text: "I worked on motor behavior using PWM and feedback control so the mouse could drive straighter and more consistently. Instead of assuming both motors behaved the same, I used control tuning to correct for drift, imbalance, and differences in the drivetrain.",
      },
      {
        title: "Maze Solving",
        text: "I brought the project together by implementing maze-solving behavior on top of the sensing and motion stack. That included representing the maze internally and using floodfill-style logic so the mouse could choose a path toward the goal and update its decisions as it explored.",
      },
    ],

    electrical:
      "The electrical side of micromouse was a big part of what made the robot real. The course mouse used a Raspberry Pi Pico as the microcontroller, a DRV8833 motor driver for the two DC motors, motor encoders for wheel feedback, differential IR sensor pairs for wall sensing, and a PCB-based chassis with mounted electronics. Working through the build meant paying close attention to soldering quality, polarity, wiring correctness, and whether each subsystem behaved reliably enough to support the next stage of the project.",

    software:
      "The software side grew step by step with the hardware. I used encoder counts to calculate wheel distance, then used left and right wheel motion to estimate displacement and angle through odometry. From there, I worked on motor commands using PWM and added feedback control so the mouse could correct motion errors instead of drifting. Later, I built on that foundation with wall-aware behavior and maze-solving logic, so the mouse was not just movable, but autonomous.",

    systemDesign:
      "What stood out to me most in Micromouse was how interconnected the system was. Assembly quality affected sensing. Sensing quality affected control. Control quality affected whether maze-solving logic would work in practice. The final robot depended on a full stack: a physically reliable board, readable encoder and IR data, stable motion control, and navigation logic that could use the information correctly. Finishing the mouse forced me to think like a systems engineer instead of treating hardware and code as separate tasks.",

    challenges: [
      "Getting the mouse assembled cleanly enough that hardware issues would not block later software debugging.",
      "Making encoder readings useful for real motion estimation instead of just raw tick counts.",
      "Using IR sensors consistently enough for wall detection and navigation in a physical maze.",
      "Correcting motor mismatch and drift so the mouse could actually drive straight and turn predictably.",
      "Integrating maze-solving logic on top of sensing and control instead of treating the algorithm as a separate standalone problem.",
      "Debugging a real embedded robot where mechanical, electrical, and software problems could all look similar at first.",
    ],

    results:
      "By the end of the project, I had a completed micromouse that brought together assembly, sensing, motion estimation, feedback control, and maze-solving into one finished robot. The most important outcome for me was not just that it worked, but that I was able to build the whole stack and understand how each subsystem affected overall performance. It was one of the clearest examples I’ve had of turning circuits, embedded code, and control theory into a physical autonomous system.",

    reflection:
      "Micromouse was one of the most complete hands-on embedded systems projects I’ve done because it required me to finish the robot all the way through. I liked that the project was structured so that every lab added another real engineering layer: assembly, sensing, odometry, motor control, PID, and then maze solving. Completing the mouse strengthened my interest in embedded systems, robotics, and control because it showed me how much careful engineering it takes to make a small autonomous robot behave reliably in the real world.",

    sectionImages: {
      overview: {
        src: "/micromouse_assembly.png",
        alt: "Micromouse assembly process",
        caption:
          "Early Micromouse work started with assembling the robot hardware and bringing up the PCB, motors, and onboard components.",
      },
      problem: {
        src: "/micromouse_course_flow.png",
        alt: "Micromouse course progression",
        caption:
          "The project built up in stages: assembly, encoders, IR sensing, odometry, feedback control, and finally maze solving.",
      },
      role: {
        src: "/micromouse_finished_mouse.png",
        alt: "Finished Micromouse robot",
        caption:
          "I completed the full robot, from hardware assembly and soldering to the final autonomous mouse.",
      },
      electrical: {
        src: "/micromouse_hardware_diagram.png",
        alt: "Micromouse hardware diagram",
        caption:
          "The mouse combined a Pi Pico, DRV8833 motor driver, encoders, IR sensors, and PCB-mounted electronics into one compact robot.",
      },
      software: {
        src: "/micromouse_odometry_pid.png",
        alt: "Micromouse odometry and control concepts",
        caption:
          "Encoder-based odometry and PID-style feedback were key to making the mouse move accurately and consistently.",
      },
      systemDesign: {
        src: "/micromouse_floodfill.png",
        alt: "Micromouse floodfill maze solving",
        caption:
          "Maze-solving built on top of sensing and control, using an internal maze representation and floodfill-style path planning.",
      },
      results: {
        src: "/micromouse_maze_run.png",
        alt: "Micromouse navigating a maze",
        caption:
          "The final system brought together hardware, sensing, control, and path planning into a completed autonomous maze-solving robot.",
      },
    },
  },



  {
    id: "Project",
    title: "Project",
    description: "In the works",
    tech: ["???", "???", "???"],
    link: "#",
  },
];

export default projects;