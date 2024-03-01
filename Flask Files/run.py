import PraveensCalculator as pc
import PredictingFroms3Contents as pfs

def main():
    pc.download_file_from_s3('marketwiz-s3-mumbai', 'economic-bucket/gbp-srilanka-model/gbpSLModel.pkl', 'downloadss')
    pfs.main()
