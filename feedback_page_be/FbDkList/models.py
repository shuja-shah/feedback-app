import uuid
from django.db import models


class FdBkConfig(models.Model):
    # Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    BU_ID = models.IntegerField(null=True)
    BU_Name = models.CharField(max_length=255, null=True)
    BU_Address = models.TextField(null=True)
    BU_Email_Id = models.EmailField(max_length=255, null=True)
    BU_Contact_Number = models.CharField(max_length=20, null=True)
    BU_Logo = models.ImageField(upload_to="logos/", null=True)
    BU_ColorTheme = models.CharField(max_length=20, null=True)
    bu_font_color = models.CharField(
        max_length=20, null=True
    )  # New field added for font color
    FdBk_Page_Title = models.TextField(null=True)
    FdBk_Page_SubTitle = models.TextField(null=True)
    FdBk_Page_Dialog = models.TextField(null=True)
    FdBk_Page_LastNote = models.TextField(null=True)
    BU_MainImg = models.CharField(
        max_length=20, null=True
    )  # New field added for main image
    BU_LastImg = models.CharField(
        max_length=20, null=True
    )  # New field added for last image


class FdBkQuestions(models.Model):
    # Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Question = models.TextField()
    IsMandatory = models.CharField(max_length=30)
    Score_1_Feeling = models.CharField(max_length=30)
    Score_1_Symbol = models.CharField(max_length=15)
    Score_1_Color = models.CharField(max_length=15)
    Score_1_FollowUp_Question = models.TextField()
    Score_1_Display_Message = models.TextField()
    Score_2_Feeling = models.CharField(max_length=30)
    Score_2_Symbol = models.CharField(max_length=15)
    Score_2_Color = models.CharField(max_length=15)
    Score_2_FollowUp_Question = models.TextField()
    Score_2_Display_Message = models.TextField()
    Score_3_Feeling = models.CharField(max_length=30)
    Score_3_Symbol = models.CharField(max_length=15)
    Score_3_Color = models.CharField(max_length=15)
    Score_3_FollowUp_Question = models.TextField()
    Score_3_Display_Message = models.TextField()
    Score_4_Feeling = models.CharField(max_length=30)
    Score_4_Symbol = models.CharField(max_length=15)
    Score_4_Color = models.CharField(max_length=15)
    Score_4_FollowUp_Question = models.TextField()
    Score_4_Display_Message = models.TextField()
    Score_5_Feeling = models.CharField(max_length=30)
    Score_5_Symbol = models.CharField(max_length=15)
    Score_5_Color = models.CharField(max_length=15)
    Score_5_FollowUp_Question = models.TextField()
    Score_5_Display_Message = models.TextField()
    # BranchId = models.BigIntegerField()
    question_type = models.CharField(max_length=20)

    # order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.Question}"


class Order(models.Model):
    # Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_number = models.CharField(max_length=20)
    order_date = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    business = models.ForeignKey(
        FdBkConfig, on_delete=models.CASCADE, related_name="orders"
    )
    questions = models.ManyToManyField(FdBkQuestions)
    feedback_completed = models.BooleanField(default=False)

    def all_questions_feedback_completed(self):
        for question in self.questions.all():
            if not Feedback.objects.filter(question=question, order=self).exists():
                return False
        return True


class Feedback(models.Model):
    # Question = models.TextField()
    Rating = models.IntegerField()
    Comment = models.TextField(blank=True, null=True)
    question = models.ForeignKey(FdBkQuestions, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"Feedback {self.id}: {self.question}"
