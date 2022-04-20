# simple-react-web-component-with-react-router

## To Clone

```bash
git clone ssh://github-matt/mattccrampton/simple-react-web-component-with-react-router.git
cd simple-react-web-component-with-react-router
```

## Deploy

## First time

### Add route 53 hosted zone

- get nameserver hostnames

### Update name.com nameservers

### Create certificate (your region)

### Create certificate (us-east-1 for CF distr)

### Create S3 Bucket

- Turn on Web hosting

#### Set S3 bucket policy

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::static.CHANGETHIS.com/*"
        }
    ]
}
```

### Push initial content

```bash
npm run d
```

### Create cloudfront distro

Note: When creating a cloudfront distribution, make sure its set to http only between CF and S3, otherwise CF won't be able to pull the bits

### Add Cloudfront distro to route53 (static.CHANGETHIS.com or whatever)

ok test, should work.
