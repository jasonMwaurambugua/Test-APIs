/*
# POST request with JSON payload
$body = @{
    "id" = "4"
    "title" = "Meeting Reminder"
    "from" = "Manager"
    "message" = "Don't forget the team meeting at 2 PM today."
}

Invoke-RestMethod -Uri "http://localhost:3002/api/notifications" -Method Post -Body ($body | ConvertTo-Json) -ContentType "application/json"
 */

/*
 # PUT request with JSON payload
$body = @{
    "title" = "New Message"
    "from" ="Jane Doe"
    "message" = "I/'m glad he did.Thank you for update"
}

Invoke-RestMethod -Uri "http://localhost:3002/api/notifications/5" -Method Put -Body ($body | ConvertTo-Json) -ContentType "application/json"
 */

/*
# DELETE request
Invoke-RestMethod -Uri "http://localhost:3002/api/notifications/1" -Method Delete
 */




