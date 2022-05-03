using Entities;
using System.Collections.Generic;

namespace Common
{
    public static class Utils
    {
        public static List<Teacher> GetSampleData() 
        {
            // The link is circularly made just for the sake of bidirectionality

            var teacherOne = new Teacher { Name = "Zamfiroiu Alin" };
            var teacherTwo = new Teacher { Name = "Vasilescu Adrian" };

            var subjectOne = new Subject { Name = "Maths", Code = "MT", Teacher = teacherOne };
            var subjectTwo = new Subject { Name = "Computer science", Code = "CS", Teacher = teacherOne };
            var subjectThree = new Subject { Name = "Data structures", Code = "DS", Teacher = teacherOne };

            var subjectFour = new Subject { Name = "Information Technology Bases", Code = "ITB", Teacher = teacherTwo };
            var subjectFive = new Subject { Name = "Operating systems", Code = "OS", Teacher = teacherTwo };
            var subjectSix = new Subject { Name = "Software quality and testing", Code = "SQT", Teacher = teacherTwo };

            var studentOne = new Student { Name = "Denis Dragomir", AttendingClass = subjectOne };
            var studentTwo = new Student { Name = "Ionut Dragomir", AttendingClass = subjectOne };
            var studentThree = new Student { Name = "Vali Erevar", AttendingClass = subjectTwo };
            var studentFour = new Student { Name = "Maria Dogaru", AttendingClass = subjectTwo };
            var studentFive = new Student { Name = "Claudia Dinu", AttendingClass = subjectThree };
            var studentSix = new Student { Name = "Daria Retezat", AttendingClass = subjectThree };
            var studentSeven = new Student { Name = "Gabriel Dragomir", AttendingClass = subjectFour };
            var studentEight = new Student { Name = "Nicoleta Dragomir", AttendingClass = subjectFour };
            var studentNine = new Student { Name = "Daniela Retezat", AttendingClass = subjectFive };
            var studentTen = new Student { Name = "Ruxandra Duta", AttendingClass = subjectFive };
            var studentEleven = new Student { Name = "Stefan Balea", AttendingClass = subjectSix };
            var studentTwelve = new Student { Name = "Adrian Dragomir", AttendingClass = subjectSix };


            subjectOne.AddAttendingStudent(studentOne).AddAttendingStudent(studentTwo);
            subjectTwo.AddAttendingStudent(studentThree).AddAttendingStudent(studentFour);
            subjectThree.AddAttendingStudent(studentFive).AddAttendingStudent(studentSix);
            subjectFour.AddAttendingStudent(studentSeven).AddAttendingStudent(studentEight);
            subjectFive.AddAttendingStudent(studentNine).AddAttendingStudent(studentTen);
            subjectSix.AddAttendingStudent(studentEleven).AddAttendingStudent(studentTwelve);

            teacherOne.AddSubject(subjectOne).AddSubject(subjectTwo).AddSubject(subjectThree);
            teacherTwo.AddSubject(subjectFour).AddSubject(subjectFive).AddSubject(subjectSix);

            return new List<Teacher> {teacherOne, teacherTwo};
        }

        public static void ExposeTeachers(List<Teacher> teacherList) {
            foreach (Teacher teacher in teacherList) {
                teacher.Expose();
            }
        }
    }
}
