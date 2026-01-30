from celery import shared_task
from django.core.mail import send_mail

@shared_task(bind=True, autoretry_for=(Exception,), retry_kwargs={"max_retries": 3, "countdown": 5})
def send_email_task(self, email):
    send_mail(
        subject="Welcome",
        message="Hello from Celery",
        from_email="atul00001@gmail.com",
        recipient_list=[email],
    )
