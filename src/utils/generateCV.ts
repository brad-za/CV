import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface PersonalInfo {
  name: string;
  birthDate: Date;
  location: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

interface Skill {
  name: string;
  stars: number;
}

interface Education {
  year: string;
  subject: string;
  about: string;
  courses?: string[];
}

interface Job {
  position: string;
  date: string;
  company: string;
  about: string;
  duties: string[];
}

// Draw star rating as graphics - returns a function that draws to the PDF
const drawStarRating = (
  doc: jsPDF,
  stars: number,
  x: number,
  y: number,
  size: number = 3
): void => {
  const spacing = size * 2.5;
  for (let i = 0; i < 5; i++) {
    const starX = x + i * spacing;
    if (i < stars) {
      // Filled star - draw a filled circle
      doc.setFillColor(44, 62, 80);
      doc.circle(starX, y, size / 2, "F");
    } else {
      // Empty star - draw an outline circle
      doc.setDrawColor(44, 62, 80);
      doc.setLineWidth(0.3);
      doc.circle(starX, y, size / 2, "S");
    }
  }
};

// Text representation for the table (using simple characters)
const getStarRatingText = (stars: number): string => {
  return "[" + "●".repeat(stars) + "○".repeat(5 - stars) + "]";
};

// Calculate age from birth date
const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const generateCV = (
  aboutMe: string[],
  skills: Skill[],
  education: Education[],
  jobs: Job[],
  personalInfo: PersonalInfo,
  profileImageBase64?: string
): void => {
  try {
    console.log("Generating CV PDF...");
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let yPosition = 20;

    // ============== HEADER SECTION ==============
    const headerHeight = 50;
    const imageSize = 35;

    // Add profile image if provided
    if (profileImageBase64) {
      try {
        doc.addImage(
          profileImageBase64,
          "JPEG",
          margin,
          yPosition,
          imageSize,
          imageSize
        );
      } catch (imgError) {
        console.warn("Could not add profile image:", imgError);
      }
    }

    // Name (large, bold)
    const textStartX = profileImageBase64 ? margin + imageSize + 10 : margin;
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(44, 62, 80);
    doc.text(personalInfo.name, textStartX, yPosition + 10);

    // Title/Role
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(
      "React Developer | Blockchain Enthusiast",
      textStartX,
      yPosition + 18
    );

    // Contact info line
    const age = calculateAge(personalInfo.birthDate);
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(
      `Age: ${age} | Location: ${personalInfo.location}`,
      textStartX,
      yPosition + 26
    );

    // GitHub link
    if (personalInfo.github) {
      doc.setTextColor(52, 152, 219);
      doc.text(`GitHub: ${personalInfo.github}`, textStartX, yPosition + 33);
    }

    yPosition += headerHeight + 10;

    // Add a separator line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // Helper function to add a section title
    const addSectionTitle = (title: string): void => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(44, 62, 80);
      doc.text(title, margin, yPosition);
      yPosition += 8;
      // Add underline
      doc.setDrawColor(44, 62, 80);
      doc.setLineWidth(0.5);
      doc.line(margin, yPosition, margin + 50, yPosition);
      yPosition += 10;
    };

    // Helper function to add paragraph text
    const addParagraph = (text: string): void => {
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize(text.trim(), contentWidth);

      // Check if we need a new page
      if (yPosition + lines.length * 5 > 280) {
        doc.addPage();
        yPosition = 20;
      }

      doc.text(lines, margin, yPosition);
      yPosition += lines.length * 5 + 5;
    };

    // About Me Section
    addSectionTitle("About Me");
    aboutMe.forEach((paragraph) => {
      addParagraph(paragraph);
    });

    // Add GitHub link mention
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    addParagraph(
      "Please explore my GitHub profile (github.com/brad-za) to see some of the work I have done and the progress I have made in my coding journey."
    );
    addParagraph(
      "I am especially happy with my performance in the 2022 Advent of Code challenge (github.com/brad-za/AOC)."
    );

    yPosition += 5;

    // Technical Profile Section
    addSectionTitle("Technical Profile");

    // Skills - draw as a custom list with graphical stars
    skills.forEach((skill, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      // Skill name
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      doc.text(skill.name, margin, yPosition);

      // Draw star rating as circles
      drawStarRating(doc, skill.stars, margin + 50, yPosition - 1, 2.5);

      yPosition += 7;
    });

    yPosition += 10;

    // Education Section
    addSectionTitle("Education");

    education.forEach((edu) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Subject and Year
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(44, 62, 80);
      doc.text(edu.subject, margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(edu.year, pageWidth - margin, yPosition, { align: "right" });
      yPosition += 6;

      // About
      addParagraph(edu.about);

      // Courses if any
      if (edu.courses && edu.courses.length > 0) {
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(80, 80, 80);
        edu.courses.forEach((course) => {
          doc.text(`• ${course}`, margin + 5, yPosition);
          yPosition += 5;
        });
      }

      yPosition += 5;
    });

    // Work History Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    addSectionTitle("Work History");

    jobs.forEach((job) => {
      if (yPosition > 240) {
        doc.addPage();
        yPosition = 20;
      }

      // Position and Date
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(44, 62, 80);
      doc.text(job.position, margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(job.date, pageWidth - margin, yPosition, { align: "right" });
      yPosition += 6;

      // Company
      if (job.company) {
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(80, 80, 80);
        doc.text(job.company, margin, yPosition);
        yPosition += 6;
      }

      // About
      addParagraph(job.about);

      // Duties
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      job.duties.forEach((duty) => {
        if (yPosition > 275) {
          doc.addPage();
          yPosition = 20;
        }
        const dutyLines = doc.splitTextToSize(`• ${duty}`, contentWidth - 10);
        doc.text(dutyLines, margin + 5, yPosition);
        yPosition += dutyLines.length * 5;
      });

      yPosition += 8;
    });

    // Save the PDF
    console.log("Saving PDF...");
    doc.save("cv.pdf");
    console.log("PDF saved successfully!");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Check console for details.");
  }
};
