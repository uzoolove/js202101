class HighSchool{
	int kor;
	int eng;
	
	HighSchool(int kor, int eng){
		this.kor = kor;
		this.eng = eng;
	}
	
	int sum(){
		return this.kor + this.eng;
	}
	float avg(){
		return this.sum() / 2;
	}
}

class College extends HighSchool{
	College(int kor, int eng){
		super(kor, eng);
	}
	
	char grade(){
		char grade = 'F';
		float avg = this.avg();
		if(avg >= 90){
			grade = 'A';
		}else if(avg >= 80){
			grade = 'B';
		}else if(avg >= 70){
			grade = 'C';
		}else if(avg >= 60){
			grade = 'D';
		}
		return grade;
	}
}

public class JavaClass{
	public static void main(String[] args){
		HighSchool s1 = new HighSchool(100, 90);
		College s2 = new College(80, 70);

		System.out.println(s1.sum());
		System.out.println(s1.avg());

		System.out.println(s2.sum());
		System.out.println(s2.avg());
		System.out.println(s2.grade());
	}
}











