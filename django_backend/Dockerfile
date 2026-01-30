FROM python:3.12-slim

WORKDIR /app

# MySQL client + build deps
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    gcc \
    pkg-config \
    default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
